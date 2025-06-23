export type LegacyCategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
};

export type LegacyCategory = {
  title: string;
  items: LegacyCategoryItem[];
};

export type Category = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  sortOrder: number;
  isActive: boolean;
};

export interface CategoryItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}
