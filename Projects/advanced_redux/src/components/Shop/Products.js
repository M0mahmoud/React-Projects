import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMY_PRODUCTS = [
  {
    id: 1,
    title: "My First Book",
    price: 6,
    description: "This is a first product",
  },
  {
    id: 2,
    title: "My Second Book",
    price: 12,
    description: "This is a Second product",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
