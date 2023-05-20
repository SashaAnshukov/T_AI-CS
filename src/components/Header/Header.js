import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import Navbar from "../Navbar/Navbar";
import RoboLogo from "../../images/robo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.mainSection}>
        <div className={styles.logoSection}>
          <img className={styles.logo} src={RoboLogo} alt="robot image" />
          <p className={styles.logoTitle}>Artificial Intelligence</p>
        </div>
        <Navbar />
        <Link to="/signin" className={styles.button}>
          {"Sign-in"}
        </Link>
      </div>
    </div>
  );
}

export default Header;
