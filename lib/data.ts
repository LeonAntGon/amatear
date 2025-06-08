import { Product, ProductCategory } from './types';
import mateImperial1 from "@/public/mates/imp-1.jpg"
import mateImperial2 from "@/public/mates/imp-2.jpg"
import mateImperialRosa from "@/public/mates/imp-r.jpg"
import camioneroAcero from "@/public/mates/cam-acero.jpg"
import camioneroAlgarrobo from "@/public/mates/cam-algarrobo.jpg"

export const products: Product[] = [
  {
    id: 1,
    name: 'Imperial de algarrobo clásico',
    description: 'Mate imperial de calabaza premium con virola de alpaca y opción de grabado personalizado. Ideal para los verdaderos conocedores del mate.',
    price: 15000,
    category: 'mate',
    images: [mateImperial1.src],
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
    name: 'Imperial de algarrobo premium',
    description: 'Mate imperial de calabaza premium con acabado especial y virola de alpaca. Diseño elegante para los amantes del mate tradicional.',
    price: 16000,
    category: 'mate',
    images: [mateImperial2.src],
    variants: {
      size: ['Standard', 'Grande'],
      style: ['Liso', 'Grabado Simple', 'Grabado Premium'],
    },
    stock: 12,
    featured: true,
    specifications: {
      material: 'Calabaza natural y alpaca',
      capacity: '180ml',
      origin: 'Tucumán, Argentina',
    },
  },
  {
    id: 3,
    name: 'Imperial de algarrobo rosa',
    description: 'Mate imperial de calabaza con un hermoso acabado rosado y virola de alpaca. Una pieza única que combina tradición con estilo.',
    price: 16500,
    category: 'mate',
    images: [mateImperialRosa.src],
    variants: {
      size: ['Standard', 'Grande'],
      style: ['Liso', 'Grabado Simple', 'Grabado Premium'],
    },
    stock: 10,
    featured: true,
    specifications: {
      material: 'Calabaza natural y alpaca',
      capacity: '180ml',
      origin: 'Tucumán, Argentina',
    },
  },
  {
    id: 4,
    name: 'Camionero de Acero',
    description: 'Mate camionero robusto fabricado en acero inoxidable. Ideal para el uso diario y viajes, resistente a golpes y caídas.',
    price: 12000,
    category: 'mate',
    images: [camioneroAcero.src],
    variants: {
      size: ['Standard'],
      style: ['Liso', 'Grabado Simple'],
    },
    stock: 20,
    featured: false,
    specifications: {
      material: 'Acero inoxidable',
      capacity: '200ml',
      origin: 'Tucumán, Argentina',
    },
  },
  {
    id: 5,
    name: 'Camionero de Algarrobo',
    description: 'Mate camionero artesanal tallado en madera de algarrobo. Combina la tradición del mate con la durabilidad de la madera noble.',
    price: 10000,
    category: 'mate',
    images: [camioneroAlgarrobo.src],
    variants: {
      size: ['Standard'],
      style: ['Liso', 'Grabado Simple'],
    },
    stock: 25,
    featured: false,
    specifications: {
      material: 'Madera de algarrobo',
      capacity: '190ml',
      origin: 'Tucumán, Argentina',
    },
  },
];

export const categories: ProductCategory[] = [
  {
    id: 'mates',
    name: 'Mates Artesanales',
    description: 'Mates únicos con grabados personalizados',
    image: mateImperial1.src,
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