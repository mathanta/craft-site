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

  const imageFiles = imageFilesRaw.filter((file) => file !== 'manifest.json');

  const groupedImages = imageFiles.reduce<Record<string, GroupedImage>>((acc, file) => {
    const cleanName = file
      .replace(/^featured-/, '')           // remove "featured-" prefix
      .replace(/\.(jpg|jpeg|png)$/i, '');  // remove file extension
    const baseName = cleanName.replace(/-\d+$/, ''); // remove trailing "-1", "-2", etc.

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
      .replace(/-/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: descriptions[baseName] || 'Coming soon...',
    featured: data.featured,
  }));

  return NextResponse.json(images.sort((a, b) => a.title.localeCompare(b.title)));
}