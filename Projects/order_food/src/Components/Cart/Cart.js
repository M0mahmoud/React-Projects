import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  // Context
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  // Functions
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  //
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmit(true);
    await fetch(
      "https://new-firebase-f1ba2-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setIsSubmit(false);
    setDidSubmit(true);
    cartCtx.clearCart()
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCofirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalAction}
    </>
  );

  const isSubmitingModalContent = <p>Sending Order Data...</p>;

  const didSubmitingModalContent = (
    <>
      <p>Successfully Sent The Order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmit && !didSubmit && cartModalContent}
      {isSubmit && isSubmitingModalContent}
      {!isSubmit && didSubmit && didSubmitingModalContent}
    </Modal>
  );
}

export default Cart;
