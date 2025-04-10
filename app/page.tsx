import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import bgHero from "@/public/herobg.jpg"
import mateFacha from "@/public/mate.jpg"
import { products } from '@/lib/data';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center">
       <div className="absolute inset-0 z-0">
       <Image
         src={bgHero}  // Asegurate de tener la imagen en public/images/
         alt="Fondo hero de propiedad de lujo"
         fill
         className="object-cover object-center"
         priority
         quality={75}
       />
       
       {/* Overlay para mejor contraste */}
       
       </div>
     
        <div className="absolute inset-0 ">
          <Image
            src="https://images.unsplash.com/photo-1619449991544-01fa5a1f122e?auto=format&fit=crop&q=80"
            alt="Mate artesanal"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center 
        flex flex-wrap justify-center flex-col gap-y-4 bg-black/30 py-10 rounded-xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
          Acompañando tus momentos
          </h1>
          <Link href="/inventario">
            <Button size="lg" className="bg-[#1b8b25] hover:bg-[#4cb155] text-white">
              Ver productos
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">Productos Destacados</h2>
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
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src={mateFacha}
                alt="Nuestro local"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-dark">
                Más que un mate, una tradición tucumana
              </h2>
              <p className="text-gray-600 mb-4">
                En A Matear, nos enorgullece mantener viva la tradición del mate artesanal tucumano. Cada pieza que creamos es única, elaborada con pasión y dedicación por nuestros artesanos locales.
              </p>
              <p className="text-gray-600">
                Desde 2015, hemos estado compartiendo nuestra pasión por el mate con clientes de todo el país, ofreciendo no solo productos de la más alta calidad, sino también una experiencia que conecta con nuestras raíces y tradiciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "¡El mejor servicio postventa que probé!",
                author: "@mateero_123"
              },
              {
                text: "Los mates más lindos que vi. ¡Super recomendado!",
                author: "@yerbamatera"
              },
              {
                text: "Excelente calidad y atención personalizada",
                author: "@matecito_feliz"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <p className="text-lg mb-4">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-accent">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}