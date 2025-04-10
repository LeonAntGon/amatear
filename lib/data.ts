import { Product, ProductCategory } from './types';
import mateImperial1 from "@/public/mates/imperial-de-algarrobo.jpg"
import trymate from "@/public/mates/imperial-premium-de-albaca.jpg"

export const products: Product[] = [
  {
    id: 1,
    name: 'Imperial de algarrobo',
    description: 'Mate imperial de calabaza premium con virola de alpaca y opción de grabado personalizado. Ideal para los verdaderos conocedores del mate.',
    price: 15000,
    category: 'mate',
    images: [
      mateImperial1.src ,
      trymate.src,
    ],
    variants: {
      size: ['Standard', 'Grande'],
      style: ['Liso', 'Grabado Simple', 'Grabado Premium'],
    },
    stock: 15,
    featured: true,
    specifications: {
      material: 'Calabaza natural y alpaca',
      capacity: '180ml',
      origin: 'Tucumán, Argentina',
    },
  },
  {
    id: 2,
    name: 'Yerba Premium Tucumana',
    description: 'Yerba mate premium cultivada en las mejores plantaciones de Tucumán. Estacionamiento óptimo para un sabor equilibrado.',
    price: 3500,
    category: 'yerba',
    images: [
      'https://images.unsplash.com/photo-1619449991858-0fb90d26c40c?auto=format&fit=crop&q=80&w=800',
    ],
    stock: 50,
    featured: true,
    specifications: {
      origin: 'Tucumán, Argentina',
    },
  },
  {
    id: 3,
    name: 'Set Matero Completo',
    description: 'Set completo que incluye mate imperial, bombilla de alpaca, yerba premium y bolso matero artesanal.',
    price: 25000,
    category: 'set',
    images: [
      'https://images.unsplash.com/photo-1619449991584-ddf6d868c6c8?auto=format&fit=crop&q=80&w=800',
    ],
    variants: {
      style: ['Clásico', 'Premium'],
    },
    stock: 10,
    featured: true,
    specifications: {
      material: 'Varios',
      origin: 'Tucumán, Argentina',
    },
  },
  {
    id: 4,
    name: 'Bombilla Alpaca Premium',
    description: 'Bombilla artesanal de alpaca con diseño tradicional y filtro desmontable. Perfecta para disfrutar tu mate con estilo y durabilidad.',
    price: 8500,
    category: 'bombilla',
    images: [
      'https://images.unsplash.com/photo-1619449991584-ddf6d868c6c8?auto=format&fit=crop&q=80&w=800',
    ],
    stock: 25,
    featured: true,
    specifications: {
      material: 'Alpaca 100%',
      length: '20cm',
      origin: 'Tucumán, Argentina',
    },
  },
  {
    id: 5,
    name: 'Termo Stanley Original',
    description: 'Termo de acero inoxidable con tecnología de aislamiento térmico que mantiene la temperatura del agua por hasta 24 horas.',
    price: 45000,
    category: 'termo',
    images: [
      'https://images.unsplash.com/photo-1619449991377-ed091f74ed76?auto=format&fit=crop&q=80&w=800',
    ],
    variants: {
      size: ['1L', '1.2L'],
      color: ['Verde', 'Negro', 'Azul'],
    },
    stock: 20,
    featured: true,
    specifications: {
      material: 'Acero inoxidable',
      capacity: '1L/1.2L',
      duration: '24 horas caliente/36 horas frío',
    },
  },
];

export const categories: ProductCategory[] = [
  {
    id: 'mates',
    name: 'Mates Artesanales',
    description: 'Mates únicos con grabados personalizados',
    image: 'https://images.unsplash.com/photo-1619449991377-ed091f74ed76?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'yerbas',
    name: 'Yerbas Especiales',
    description: 'Selección premium de yerbas tucumanas',
    image: 'https://images.unsplash.com/photo-1619449991858-0fb90d26c40c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'bombillas',
    name: 'Bombillas Artesanales',
    description: 'Bombillas de alpaca y plata premium',
    image: 'https://images.unsplash.com/photo-1619449991584-ddf6d868c6c8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'termos',
    name: 'Termos Premium',
    description: 'La mejor selección de termos para tu mate',
    image: 'https://images.unsplash.com/photo-1619449991377-ed091f74ed76?auto=format&fit=crop&q=80&w=800',
  },
];