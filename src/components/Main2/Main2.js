import React from "react";
import { Link } from "react-router-dom";
import digiDataImage from "../../images/digiData.svg";
import styles from "./styles.module.scss";

function Main2() {
  const info = {
    title: `What our clients say about our awesome solutions`,
    description1: `To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.`,
    description2: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.`,
    description3: `Lorem ipsum is placeholder previewing layouts and visual mockups.`,
    description4: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
  };

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <h1 className={styles.title}>{info.title}</h1>
        <p className={styles.description}>{info.description1}</p>
        <p className={styles.description}>{info.description2}</p>
        <p className={styles.description}>{info.description3}</p>
        <p className={styles.description}>{info.description4}</p>
      </div>
      <img className={styles.image} src={digiDataImage} alt="digital image" />
    </div>
  );
}

export default Main2;
