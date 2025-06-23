import { useContext, Fragment, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { getAllProducts } from '../../services/product.service';
import { Product } from '../../types/product.types';
import CategoryPreview from '../../components/category-preview/Category-preview.component';

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Fragment>
      {categories.map((category) => {
        const filtered = products
          .filter((product) => product.category_id === category.id)
          .map((product) => ({
            id: Number(product.id),
            name: product.name,
            imageUrl: product.image_url,
            price: product.price,
            category: category.name,
          }));

        return (
          <CategoryPreview
            key={category.id}
            title={category.name}
            products={filtered}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
