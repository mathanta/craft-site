import { readdirSync } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { descriptions } from '../../../../data/descriptions';

export async function GET() {
    const imagesDirectory = path.join(process.cwd(), 'public/crafts');
    const imageFiles = readdirSync(imagesDirectory);

    // Group images by base name
    const groupedImages = imageFiles.reduce((acc, file) => {
        // Remove 'featured-' and numbers+extension for grouping purposes
        const baseName = file
            .replace(/^featured-/, '')  // remove featured prefix first
            .replace(/\d+\.(jpg|jpeg|png|JPEG)$/i, '');  // then remove numbers and extension

        if (!acc[baseName]) {
            acc[baseName] = {
                images: [],
                featured: false
            };
        }

        // If any version is featured, mark the group as featured
        if (file.startsWith('featured-')) {
            acc[baseName].featured = true;
        }

        acc[baseName].images.push(`/crafts/${file}`);
        return acc;
    }, {} as Record<string, { images: string[], featured: boolean }>);

    // Convert to array format
    const images = Object.entries(groupedImages).map(([baseName, data]) => ({
        images: data.images,
        title: baseName
            .replace(/\.(jpg|jpeg|png|JPEG)$/i, '')  // remove extension from base name
            .replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
        description: descriptions[baseName + '.png'] || "Coming soon...",
        featured: data.featured
    }));

    return NextResponse.json(images.sort((a, b) => a.title.localeCompare(b.title)));
}
