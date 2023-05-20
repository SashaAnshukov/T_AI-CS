import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import Logo1 from "../../images/logoIpsum1.svg";
import Logo2 from "../../images/logoIpsum2.svg";
import Logo3 from "../../images/logoIpsum3.svg";
import Logo4 from "../../images/logoIpsum4.svg";

function NavbarLogo() {
  return (
    <nav className={styles.navSection}>
      <ul className={styles.nav}>
        <Link to="/" className={styles.navItem}>
          <img src={Logo1} alt="image1" />
        </Link>
        <Link to="/about" className={styles.navItem}>
          <img src={Logo2} alt="image2" />
        </Link>
        <Link to="/services" className={styles.navItem}>
          <img src={Logo3} alt="image3" />
        </Link>
        <Link to="/blog" className={styles.navItem}>
          <img src={Logo4} alt="image4" />
        </Link>
      </ul>
    </nav>
  );
}

export default NavbarLogo;
