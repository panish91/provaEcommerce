import Image from 'next/image';
import Button from '@mui/material/Button';
import CartContext from "../../context/cartContext.js";
import React, { useContext } from "react";

export default function Plp() {
  const cartContext = useContext(CartContext);
  return (
    <div className="listing-elements">
      {cartContext.products.map(product => (
        <div key={product.sku} className="listing-product">
          <div className="product-container">
            <Image
                src={product.picture}
                height={320}
                width={320}
                alt={`esempio-${product.name}`}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>{product.price}€</strong>
            <Button variant="outlined" onClick={cartContext.addProductToCart.bind(this, product)}>aggiungi al carrello</Button>
          </div>
        </div>
      ))}
    </div>
  );
}