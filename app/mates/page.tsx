import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import bgBanner from "@/public/bg-mate-guitarra.jpg"

export const metadata = {
  title: 'Mates Artesanales | A Matear',
  description: 'Descubrí nuestra colección de mates artesanales con grabados personalizados, hechos en Tucumán con materiales premium.',
};

export default function MatesPage() {
  const mateProducts = products.filter(product => product.category === 'mate');

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[40vh] mb-12 rounded-xl overflow-hidden">
          <Image
            src={bgBanner}
            alt="Mates artesanales"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#754b35] bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white bg-black/30 p-8 rounded-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mates Artesanales</h1>
              <p className="text-xl md:text-2xl">
                Tradición tucumana en cada pieza
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Nuestros Mates
          </h2>
          <p className="text-gray-600">
            Cada mate es una pieza única, elaborada artesanalmente con materiales de primera calidad. 
            Podés personalizarlo con el grabado que prefieras para hacerlo verdaderamente tuyo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mateProducts.map((product) => (
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