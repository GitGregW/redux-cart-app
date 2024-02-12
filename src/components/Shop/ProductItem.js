import { useDispatch } from 'react-redux'
import { cartItemsActions } from '../../store';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description } = props.productItem;
  
  const dispatch = useDispatch();
  const handleAddToCart = () => (
    dispatch(cartItemsActions.addToCart(props.productItem))
  );

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
