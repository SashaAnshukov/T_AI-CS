import React from "react";
import { Link } from "react-router-dom";
import MobileImage from "../../images/mobile.svg";
import styles from "./styles.module.scss";

function Main1() {
  const info = {
    title: `Apply AI, Deep Learning and Data Sciece to solve`,
    descriptionFull: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    link1: "https://github.com/SashaAnshukov",
    button1: "Learn More",
  };

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <h1 className={styles.title}>{info.title}</h1>
        <p className={styles.description}>{info.descriptionFull}</p>
        <div className={styles.buttons}>
          <a
            className={styles.link}
            href={info.link1}
            target="_blank"
            rel="noopener noreferrer"
          >
            {info.button1}
          </a>
        </div>
      </div>
      <img className={styles.image} src={MobileImage} alt="Apply AI image" />
    </div>
  );
}

export default Main1;
