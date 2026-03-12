import "./Hero.css";
import { Link } from "react-router-dom";
import fashionstore from "../assets/fashionstore.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${fashionstore})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="hero-content">
        <p className="hero-subtitle">NEW SEASON COLLECTION</p>

        <h1 className="hero-title">
          Elevate Your <br /> Everyday Style
        </h1>

        <Link to="/shop" className="hero-btn">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;