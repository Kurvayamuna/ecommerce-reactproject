import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About Us */}
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Shop */}
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><Link to="/shop">Women</Link></li>
            <li><Link to="/shop">Men</Link></li>
            <li><Link to="/shop">Accessories</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestP />
            </a>
          </div>

        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        © 2024 FashionStore. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;