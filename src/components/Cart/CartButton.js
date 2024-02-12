import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/index.js';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  var total = 0;
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(cartActions.toggleShow());
  }
  const cartItems = useSelector(state => state.cartItems);
  Object.entries(cartItems).map(([title, cartItem]) => (
    total += cartItem.quantity));

  return (
    <button className={classes.button} onClick={handleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
