import React from "react";
import styles from "./styles.module.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Main1 from "../Main1/Main1";
import Carousel from "../Carousel/Carousel";
import Main2 from "../Main2/Main2";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Main1 />
      <Carousel />
      <Main2 />
      <Footer />
    </div>
  );
}

export default App;
