import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
          Logo
        </Link>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          À propos
        </Link>
        <Link to="/gallery" style={styles.link}>
          Galerie
        </Link>
        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#222",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  logo: {
    fontSize: "1.5rem",
    color: "#fff",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  },
  search: {
    display: "flex",
    alignItems: "center",
  },
};