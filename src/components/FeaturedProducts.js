import { useState } from "react";
import "./FeaturedProducts.css";

// Import images
import dress from "../assets/Linen Dress.png";
import jacket from "../assets/Casual Jacket.jpg";
import bag from "../assets/Stylish Handbag.jpg";
import shoes from "../assets/Classic Sneakers.jpg";

function FeaturedProducts({ onAddToCart }) {

  const USD_TO_INR = 83;

  const products = [
    { id: 1, name: "Linen Dress", price: "20.00", image: dress },
    { id: 2, name: "Casual Jacket", price: "20.00", image: jacket },
    { id: 3, name: "Stylish Handbag", price: "10.00", image: bag },
    { id: 4, name: "Classic Sneakers", price: "20.00", image: shoes }
  ];

  const [cart, setCart] = useState({});

  // Add to cart
  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: 1
    }));
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) => {
      const newQty = prev[id] - 1;

      if (newQty === 0) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }

      return { ...prev, [id]: newQty };
    });
  };

  return (
    <section className="featured">

      <h2 className="featured-title">Featured Products</h2>

      <div className="products-container">

        {products.map((product) => {

          const quantity = cart[product.id] || 0;

          // Convert price to INR
          const priceINR = Number(product.price) * USD_TO_INR;

          return (
            <div className="product-card" key={product.id}>

              <div className="product-image-box">
                <img src={product.image} alt={product.name} />
              </div>

              <h3>{product.name}</h3>

              <p className="price">₹{priceINR.toFixed(2)}</p>

              {quantity === 0 ? (

                <button
                  className="cart-btn"
                  onClick={() => addToCart(product.id)}
                >
                  Add to Cart
                </button>

              ) : (

                <div className="qty-box">

                  <button
                    className="qty-btn"
                    onClick={() => decreaseQty(product.id)}
                  >
                    -
                  </button>

                  <span className="qty-number">{quantity}</span>

                  <button
                    className="qty-btn"
                    onClick={() => increaseQty(product.id)}
                  >
                    +
                  </button>

                  <button
                    className="cart-btn"
                    onClick={() => onAddToCart(product)}
                  >
                    Add to Cart
                  </button>

                </div>

              )}

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default FeaturedProducts;