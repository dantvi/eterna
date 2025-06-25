import { Product, RawProduct } from '../types/product.types';

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch('/api/products');
  if (!response.ok) throw new Error('Failed to fetch products');

  const data: RawProduct[] = await response.json();

  return data.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    imageUrl: p.imageUrl,
    category: p.categoryId,
  }));
};

export const getProductById = async (id: string) => {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');

  return response.json();
};
