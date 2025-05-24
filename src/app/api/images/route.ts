export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { descriptions } from '../../../../data/descriptions';

type GroupedImage = {
  images: string[];
  featured: boolean;
};

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/crafts/manifest.json`);
  const imageFilesRaw: string[] = await res.json();

  // Filter out manifest.json itself (if present)
  const imageFiles = imageFilesRaw.filter((file) => file !== 'manifest.json');

  const groupedImages = imageFiles.reduce<Record<string, GroupedImage>>((acc, file) => {
    const baseName = file
      .replace(/^featured-/, '')
      .replace(/\d+\.(jpg|jpeg|png|JPEG)$/i, '');

    if (!acc[baseName]) {
      acc[baseName] = {
        images: [],
        featured: false,
      };
    }

    if (file.startsWith('featured-')) {
      acc[baseName].featured = true;
    }

    acc[baseName].images.push(`/crafts/${file}`);
    return acc;
  }, {});

  const images = Object.entries(groupedImages).map(([baseName, data]) => ({
    images: data.images,
    title: baseName
      .replace(/\.(jpg|jpeg|png|JPEG)$/i, '')
      .replace(/-/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: descriptions[baseName + '.png'] || 'Coming soon...',
    featured: data.featured,
  }));

  return NextResponse.json(images.sort((a, b) => a.title.localeCompare(b.title)));
}