import React from "react";
import styles from "./styles.module.scss";

function InfoSection({ title, info1, info2, info3, info4, info5, info6 }) {
  return (
    <div className={styles.infoSection}>
      <h3 className={styles.title}>{title}</h3>
      <nav className={styles.links}>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="#" target="_blank">
              {info1}
            </a>
          </li>
          <li>
            <a className={styles.link} href="#" target="_blank">
              {info2}
            </a>
          </li>
          <li>
            <a className={styles.link} href="#" target="_blank">
              {info3}
            </a>
          </li>
          <li>
            <a className={styles.link} href="#" target="_blank">
              {info4}
            </a>
          </li>
          <li>
            <a className={styles.link} href="#" target="_blank">
              {info5}
            </a>
          </li>
          <li>
            <a className={styles.link} href="#" target="_blank">
              {info6}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default InfoSection;
