import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CardIcon from "./Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [btnClassAnimation, setBtnClassAnimation] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  // Class
  const btnClass = `${classes.button} ${btnClassAnimation ? classes.bump : ""}`;
  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) return;

    setBtnClassAnimation(true);

    // Remove class
    const timer = setTimeout(() => {
      setBtnClassAnimation(false);
    }, 300);

    //clear
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
