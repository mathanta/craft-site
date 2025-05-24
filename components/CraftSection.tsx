'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'

interface CraftProps {
    images: string[];
    title: string;
    description: string;
    featured?: boolean;
}

const CraftCard = ({ images, title, description }: CraftProps) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="card">
            <div className="info">
                <h3 id='picture-title'>{title}</h3>
                <div className='picture-wrapper'>
                    <Image
                        className='picture'
                        src={`${images[currentImage]}?width=200&quality=80&format=auto`}
                        alt={title}
                        width={200}
                        height={200}
                        style={{ objectFit: 'cover' }}
                        loading="lazy"
                    />

                    <div className="picture-description">
                        <p>{description}</p>
                        {images.length > 1 && (
                            <span className="image-counter">{currentImage + 1}/{images.length}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


const CraftSection = ({ showOnlyFeatured = false }) => {
    const [crafts, setCrafts] = useState<CraftProps[]>([]);

    useEffect(() => {
        fetch('/api/images')
            .then(res => res.json())
            .then(data => {
                const displayCrafts = showOnlyFeatured
                    ? data.filter((craft: CraftProps) => craft.featured)
                    : data;
                setCrafts(displayCrafts);
            });
    }, [showOnlyFeatured]);

    return (
        <div className="crafts">
            {crafts.map((craft) => (
                <CraftCard key={craft.title} {...craft} />
            ))}
        </div>
    );
};

export default CraftSection;