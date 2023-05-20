import React from "react";
import { Link } from "react-router-dom";
import RocketLogo from "../../images/rocket.svg";
import NavbarLogo from "../NavbarLogo/NavbarLogo";
import styles from "./styles.module.scss";

function Main() {
  const info = {
    title: `Artificial intelligence
& Syber security`,
    descriptionFull: `Lorem ipsum is placeholder text commonly used in the graphic,
print, and publishing industries for previewing layouts and

visual mockups.`,
    link1: "https://github.com/SashaAnshukov",
    button1: "Get Started",
    button2: "Watch Video",
  };

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <p className={styles.description}>{"Next genaretion platform"}</p>
        <h1 className={styles.title}>{info.title}</h1>
        <p className={styles.description_full}>{info.descriptionFull}</p>
        <div className={styles.buttons}>
          <a
            className={styles.link}
            href={info.link1}
            target="_blank"
            rel="noopener noreferrer"
          >
            {info.button1}
          </a>
          <a
            className={styles.link}
            href={info.link1}
            target="_blank"
            rel="noopener noreferrer"
          >
            {info.button2}
          </a>
        </div>
      </div>
      <img
        className={styles.image}
        src={RocketLogo}
        alt="Artificial intelligence & Syber security image"
      />
      <NavbarLogo />
    </div>
  );
}

export default Main;
