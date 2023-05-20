import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <nav className={styles.navSection}>
      <ul className={styles.nav}>
        <Link to="/" className={styles.navItem}>
          {"Home"}
        </Link>
        <Link to="/about" className={styles.navItem}>
          {"About"}
        </Link>
        <Link to="/services" className={styles.navItem}>
          {"Services"}
        </Link>
        <Link to="/blog" className={styles.navItem}>
          {"Blog"}
        </Link>
        <Link to="/contact" className={styles.navItem}>
          {"Contact"}
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
