import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShow(false); 
    } else {
      setShow(true);
    }

    setLastScrollY(currentScrollY);
    if (scrollTimeout) clearTimeout(scrollTimeout);
    const timeout = setTimeout(() => {
      setShow(true);
    }, 200); 

    setScrollTimeout(timeout);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>
      <section className="logo">Foodified</section>
      <section className="mini">
     <div className="nav-link"><Link to="/">Home</Link></div>
     <div className="nav-link">Branches</div>
     <div className="nav-link"><a href="/menu.html">Menu</a>
     </div>
     <div className="nav-link"><Link to="/contact">Owners</Link></div>
      </section>
    </nav>
  );
};

export default Navbar;
