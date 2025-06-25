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
  imageUrl: string;
  stock: number;
  categoryId: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
};
