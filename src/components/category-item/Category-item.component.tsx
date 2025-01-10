import './Category-item.styles.scss';

interface Category {
  imageUrl: string;
  title: string;
}

const CategoryItem = ({ category }: { category: Category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
