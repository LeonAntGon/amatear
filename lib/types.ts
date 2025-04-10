export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'mate' | 'yerba' | 'set' | 'bombilla' | 'termo';
  images: string[];
  variants?: {
    size?: string[];
    style?: string[];
  };
  stock: number;
  featured?: boolean;
  specifications?: {
    material?: string;
    capacity?: string;
    origin?: string;
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}