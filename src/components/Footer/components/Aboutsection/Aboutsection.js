import React from "react";

import facebookLogo from "../../../../images/fbookLogo.svg";
import instLogo from "../../../../images/instlogo.svg";
import twitterLogo from "../../../../images/twitterLogo.svg";
import linkedinLogo from "../../../../images/linkedLogo.svg";
import youtubeLogo from "../../../../images/uTubeLogo.svg";
import earthLogo from "../../../../images/earthLogo.svg";
import arrowDown from "../../../../images/arrowDown.svg";

import styles from "./styles.module.scss";

function Aboutsection({ title }) {
  const info = {
    description: `Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.`,
  };
  return (
    <div className={styles.aboutsection}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{info.description}</p>
      <a className={styles.wwwLink} href="#" target="_blank">
        www.company.com
      </a>
      <nav className={styles.links}>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="#" target="_blank">
              <img
                className={styles.img}
                src={facebookLogo}
                alt="logo facebook"
              />
            </a>
          </li>
          <li>
            <a className={styles.link}>
              <img className={styles.img} src={instLogo} alt="logo instagram" />
            </a>
          </li>
          <li>
            <a className={styles.link}>
              <img
                className={styles.img}
                src={twitterLogo}
                alt="logo twitter"
              />
            </a>
          </li>
          <li>
            <a className={styles.link}>
              <img
                className={styles.img}
                src={linkedinLogo}
                alt="logo linkedin"
              />
            </a>
          </li>
          <li>
            <a className={styles.link}>
              <img
                className={styles.img}
                src={youtubeLogo}
                alt="logo youtube"
              />
            </a>
          </li>
        </ul>
      </nav>
      <nav className={styles.language}>
        <img className={styles.imgEarth} src={earthLogo} alt="earth image" />
        <a className={styles.lang} href="#" target="_blank">
          English
        </a>
        <img className={styles.img} src={arrowDown} alt="arrow down image" />
      </nav>
    </div>
  );
}

export default Aboutsection;
