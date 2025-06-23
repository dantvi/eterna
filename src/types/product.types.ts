export type LegacyProduct = {
  id: number;
  name: string;
  category?: string;
  imageUrl: string;
  price: number;
};

export type RawProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
  category_id: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
};
