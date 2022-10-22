import React, { useContext } from "react";
import MealsItemForm from "./MealsItemForm";

import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

function MealsItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext)

  const addToCarthandler =amount=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount,
      price:props.price
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={addToCarthandler}/>
      </div>
    </li>
  );
}

export default MealsItem;
