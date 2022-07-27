import React, { useReducer } from "react";
import CartContext from "./cartContext";
import { shopReducer, ADD_PRODUCT } from "./reducers";

const GlobalState = props => {
  const products = [
    {
        name: "Tipo 1",
        sku: 12345,
        price: 100,
        picture: "/pictures/example1.jpg",
        description: "Scarpa in pelle con suola in gomma"
    },
    {
        name: "Tipo 2",
        sku: 23456,
        price: 200,
        picture: "/pictures/example1.jpg",
        description: "Scarpa in pelle con suola in gomma"
    },
    {
        name: "Tipo 3",
        sku: 34567,
        price: 900,
        picture: "/pictures/example1.jpg",
        description: "Scarpa in pelle con suola in gomma"
    },
    {
        name: "Tipo 4",
        sku: 44567,
        price: 400,
        picture: "/pictures/example1.jpg",
        description: "Scarpa in pelle con suola in gomma"
    },
    {
        name: "Tipo 5",
        sku: 31561,
        price: 100,
        picture: "/pictures/example1.jpg",
        description: "Scarpa in pelle con suola in gomma"
    },
    {
        name: "Tipo 6",
        sku: 34537,
        price: 200,
        picture: "/pictures/example1.jpg",
        description: "Scarpa in pelle con suola in gomma"
    },
  ];
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
      console.log(product);
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  return (
    <CartContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default GlobalState;