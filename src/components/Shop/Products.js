import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = {
    'Test': {title: 'Test', price: 6, description: 'This is a first product - amazing!'},
    'Test2': {title: 'Test2', price: 10, description: 'This is a second product - amazing!'},
    'Test3': {title: 'Test3', price: 13, description: 'This is a third product - amazing!'},
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      { Object.keys(products).map(productKey => (
          <ProductItem key={productKey} productItem={products[productKey]} />
        ))
      }
      </ul>
    </section>
  );
};

export default Products;
