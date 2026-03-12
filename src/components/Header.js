import React, { useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../components/Header.css";

function Header({ cartCount }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Redirect to shop page with search query as a parameter
      navigate(`/shop?search=${searchTerm}`);
      setIsSearchOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">FashionStore</div>   
 
 {/* Navigation */}
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/new">New Arrivals</NavLink>
          <NavLink to="/sale">Sale</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* <NavLink to="/cart" className="action-item">🛒<span>Cart ({cartCount})</span>
          </NavLink> */}
        </nav>

        <div className="actions">
          {/* Search Toggle Logic */}
          <div className="action-item search-container">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="search-form">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Go</button>
                <span className="close-search" onClick={() => setIsSearchOpen(false)}>✕</span>
              </form>
            ) : (
              <div onClick={() => setIsSearchOpen(true)} style={{cursor: 'pointer'}}>
                🔍 <span>Search</span>
              </div>
            )}
          </div>

          <NavLink to="/cart" className="action-item">🛒<span>Cart ({cartCount})</span>
          </NavLink>
          <div className="action-item">👤 <span>Account</span></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
