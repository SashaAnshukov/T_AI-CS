import React from "react";
import roboLogo from "../../../../images/robo.svg";
import mail from "../../../../images/mail.svg";
import phone from "../../../../images/phone.svg";
import location from "../../../../images/location.svg";
import styles from "./styles.module.scss";

function ConatctsSection() {
  const info = {
    description: `Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.`,
  };

  return (
    <div className={styles.contacts}>
      <div className={styles.logoSection}>
        <img className={styles.logo} src={roboLogo} alt="robot image" />
        <p className={styles.logoTitle}>Artificial Intelligence</p>
        <p className={styles.logoDescription}>{info.description}</p>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="#" target="_blank">
              <img className={styles.img} src={mail} alt="mail image" />
              Company@gmail.com.com
            </a>
          </li>
          <li>
            <p className={styles.link}>
              <img className={styles.img} src={phone} alt="phone image" />
              Phone: (064) 332-1233
            </p>
          </li>
          <li>
            <p className={styles.link}>
              <img
                className={styles.img}
                src={location}
                alt="geoposition image"
              />
              450 Wall Street, USA, New York
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ConatctsSection;
