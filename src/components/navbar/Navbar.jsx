import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo-freepik.png" width={"25px"} />
          <span>Z-Estate</span>
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
        <Link to="/login">Login</Link>
        <Link to="/signup" className="register">
          Sign Up
        </Link>
        <div className="menuIcon">
          {open ? (
            <img src="/close.png" onClick={() => setOpen(!open)} />
          ) : (
            <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
          )}
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
