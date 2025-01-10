import Directory from "../../components/directory/Directory.component";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'Rings',
      imageUrl: 'https://img.freepik.com/free-photo/closeup-shot-two-diamond-rings-white-surface_181624-47070.jpg'
    },
    {
      id: 2,
      title: 'Necklaces',
      imageUrl: 'https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150218029.jpg'
    },
    {
      id: 3,
      title: 'Earrings',
      imageUrl: 'https://images.unsplash.com/photo-1701777892770-df3bf8006fd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      title: 'Bracelets',
      imageUrl: 'https://img.freepik.com/free-photo/jewellery-bangle-background-with-place-text-banner-fashion-accessories_460848-13231.jpg'
    },
    {
      id: 5,
      title: 'Brooches',
      imageUrl: 'https://img.freepik.com/free-photo/vintage-multicolour-brooch-white-background-fashionable-chic-elegant-accessory_482257-25614.jpg'
    },
  ]

  return (
    <>
      <Directory categories={categories} />
    </>
  );
}

export default Categories;
