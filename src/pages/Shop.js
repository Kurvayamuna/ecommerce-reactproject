import React, { useEffect, useState } from "react";
import "./Shop.css";

function Shop({ addToCart, increaseQty, decreaseQty, cart }) {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const USD_TO_INR = 83;

  const categoryNames = {
    "women's clothing": "Women",
    "men's clothing": "Men",
    "jewelery": "Jewelry",
    "electronics": "Accessories"
  };

  useEffect(() => {

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetchProducts("women's clothing");

  }, []);

  const fetchProducts = (category) => {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));

  };

  return (
    <div className="shop-page">

      <h2 className="shop-title">Shop</h2>

      {/* Category Buttons */}
      <div className="category-menu">

        {categories.map((cat, index) => (

          <button
            key={index}
            onClick={() => fetchProducts(cat)}
          >
            {categoryNames[cat]}
          </button>

        ))}

      </div>

      {/* Products Grid */}
      <div className="products-grid">

        {products.map((product) => {

          const priceINR = product.price * USD_TO_INR;

          const cartItem = cart.find((item) => item.id === product.id);

          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div className="product-card" key={product.id}>

              <img src={product.image} alt={product.title} />

              <h3>{product.title.substring(0, 40)}</h3>

              <p className="price">₹{priceINR.toFixed(2)}</p>

              {quantity === 0 ? (

                <button
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

              ) : (

                <div className="qty-box">

                  <button
                    onClick={() => decreaseQty(product.id)}
                  >
                    -
                  </button>

                  <span>{quantity}</span>

                  <button
                    onClick={() => increaseQty(product.id)}
                  >
                    +
                  </button>

                </div>

              )}

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Shop;