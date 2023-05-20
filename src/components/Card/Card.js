import { useState } from "react";
import styles from "./styles.module.scss";

function Card({ card }) {
  return (
    <article className={styles.card}>
      <div className={styles.rectangle}>
        <img className={styles.image} src={card.img} alt={card.title} />
        <div className={styles.info}>
          <h2 className={styles.title}>{card.title}</h2>
          <p className={styles.description}>{card.description}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
