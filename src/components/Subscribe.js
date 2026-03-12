import { useState } from "react";
import "./Subscribe.css";

function Subscribe() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    // Simple email validation
    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Success message
    setMessage(" Successfully subscribed! Offer notification sent to your email.");

    setEmail("");
  };

  return (
    <section className="subscribe">

      <h2>Subscribe & Get 10% Off</h2>

      <form className="subscribe-box" onSubmit={handleSubscribe}>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          SUBSCRIBE
        </button>

      </form>

      {message && (
        <p className="subscribe-message">
          {message}
        </p>
      )}

    </section>
  );
}

export default Subscribe;