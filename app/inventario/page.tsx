import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Inventario | A Matear',
  description: 'Explora nuestra colección completa de mates artesanales, yerbas premium y sets materos.',
};

export default function InventoryPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h1>
          <p className="text-lg text-gray-600">
            Descubrí nuestra selección de mates artesanales y yerbas premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/productos/${product.id}`}>
              <Card className="group cursor-pointer overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.featured && (
                    <Badge className="absolute top-2 right-2 bg-[#754b35]">
                      🥇 Destacado
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#754b35] font-bold">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.stock < 10 && (
                      <Badge variant="outline" className="text-red-500 border-red-500">
                        ¡Últimas unidades!
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}