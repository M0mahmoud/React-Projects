import React, { useReducer } from "react";
import CartContext from "./cart-context";

//Default Cart State
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Reducer Function
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // new snapshot for values
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Check if item part of cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updateItems;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    // End
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }

  // Remove

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingItem.price;

    let updateItems;
    if (existingItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "Clear") {
    return defaultCartState;
  }

  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCarthandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemFromCarthandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };
  const clearCarthandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  //---Value
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCarthandler,
    removeItem: removeItemFromCarthandler,
    clearCart: clearCarthandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
