import React from "react";

function ProductCard({ name, price, inStock }) {
  return (
    <div className="product-card">
      <h2 className="product-name">{name}</h2>

      <p className="product-price">
        Price: <span>₹{price}</span>
      </p>

      <p className={`stock-status ${inStock ? "in" : "out"}`}>
        Status: {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button className="cart-btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;