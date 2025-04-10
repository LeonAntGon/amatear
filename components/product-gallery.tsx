'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square relative rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "aspect-square relative rounded-md overflow-hidden",
                selectedImage === index && "ring-2 ring-[#754b35]"
              )}
            >
              <Image
                src={image}
                alt={`${name} - Vista ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}