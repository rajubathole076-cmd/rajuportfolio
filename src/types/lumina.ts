export interface LuminaProduct {
  id: string;
  slug: string;
  name: string;
  category: 'Pendants' | 'Downlights' | 'Track' | 'Wall' | 'Exterior';
  shortDescription: string;
  application: string[];
  material: string;
  finish: string[];
  dimensions: string;
  colorTemperature: string[];
  wattage: string;
  ipRating: string;
  installationType: string;
  image: string;
  detailImages: string[];
}

export interface QuoteItem {
  product: LuminaProduct;
  quantity: number;
  projectType: string;
}