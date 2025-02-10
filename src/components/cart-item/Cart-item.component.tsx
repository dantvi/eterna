import './Cart-item.styles.scss';

type CartItemProps = {
  cartItem: {
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  };
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
