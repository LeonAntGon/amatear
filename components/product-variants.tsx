'use client';

import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface ProductVariantsProps {
  variants: {
    size?: string[];
    style?: string[];
  };
}

export function ProductVariants({ variants }: ProductVariantsProps) {
  const [selectedSize, setSelectedSize] = useState(variants.size?.[0]);
  const [selectedStyle, setSelectedStyle] = useState(variants.style?.[0]);

  return (
    <div className="space-y-6">
      {variants.size && (
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Tamaño</h3>
          <RadioGroup
            value={selectedSize}
            onValueChange={setSelectedSize}
            className="grid grid-cols-2 gap-4"
          >
            {variants.size.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <RadioGroupItem value={size} id={`size-${size}`} />
                <Label htmlFor={`size-${size}`}>{size}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}

      {variants.style && (
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Estilo</h3>
          <RadioGroup
            value={selectedStyle}
            onValueChange={setSelectedStyle}
            className="grid grid-cols-2 gap-4"
          >
            {variants.style.map((style) => (
              <div key={style} className="flex items-center space-x-2">
                <RadioGroupItem value={style} id={`style-${style}`} />
                <Label htmlFor={`style-${style}`}>{style}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
    </div>
  );
}