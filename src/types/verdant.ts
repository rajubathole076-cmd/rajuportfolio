export interface VerdantProduct {
  id: string;
  slug: string;
  name: string;
  origin: string;
  roast: 'Light' | 'Medium' | 'Dark';
  process: string;
  tastingNotes: string[];
  description: string;
  price: number;
  weight: string;
  image: string;
}

export interface CartItem {
  product: VerdantProduct;
  quantity: number;
}