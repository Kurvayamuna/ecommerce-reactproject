import "./Cart.css";

function Cart({ cart, increaseQty, decreaseQty, removeItem }) {

  const USD_TO_INR = 83;

  const totalPriceUSD = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalPriceINR = totalPriceUSD * USD_TO_INR;

  return (
    <div className="cart-page">

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (

        <div className="cart-container">

          {cart.map((item) => {

            const priceINR = item.price * USD_TO_INR;

            return (
              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.title} />

                <div className="cart-info">

                  <h3>{item.title}</h3>

                  <p>₹{priceINR.toFixed(2)}</p>

                  <div className="qty-controls">

                    <button onClick={() => decreaseQty(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.id)}>+</button>

                  </div>

                  <button onClick={() => removeItem(item.id)}>
                    Remove
                  </button>

                </div>

              </div>
            );
          })}

          <div className="cart-total">
            <h3>Total: ₹{totalPriceINR.toFixed(2)}</h3>
          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;