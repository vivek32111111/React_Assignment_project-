import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
import "./App.css";
import { Link } from "react-router-dom";
function Navbar() {
  const { totalItems } = useCart();
  const navStyle = {
    color : "white"
  }
  return (
    <div className="nav-navbar">
      <nav className="navbar">
        <h2 className="nav-brand text-center mx-auto px-auto">Shopping Cart</h2>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/Cart">
            <li>
              <FaShoppingCart className="icon"/> ({totalItems})
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
