import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Account from "./pages/Account";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* NAVBAR */}
        <nav className="navbar">

          <Link to="/" className="logo">
            AI
          </Link>

          <div className="nav-links">
            <Link to="/orders">Orders</Link>
            <Link to="/products">Products</Link>
            <Link to="/account">Account</Link>
            <Link to="/cart">Cart</Link>
          </div>

        </nav>

        {/* PAGE CONTENT */}
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer>
          Made with <span>♥</span> at RVU.tech
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;