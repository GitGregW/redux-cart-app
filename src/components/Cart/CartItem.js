import { useDispatch } from 'react-redux';
import { cartItemsActions } from '../../store/index.js';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();
  const handleIncrement = (index) => {
    dispatch(cartItemsActions.increment(index));
  }
  const handleDecrement = (index) => {
    dispatch(cartItemsActions.decrement(index));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleDecrement(title)}>-</button>
          <button onClick={() => handleIncrement(title)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
