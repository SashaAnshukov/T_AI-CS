import React from "react";
import styles from "./styles.module.scss";

import ConatctsSection from "./components/ConatctsSection/ConatctsSection";
import InfoSection from "./components/InfoSection/InfoSection";
import Aboutsection from "./components/Aboutsection/Aboutsection";

function Footer() {
  const info = {
    description: `Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.`,

    infoTitle: `INFORMATION`,
    information1: `New Collection`,
    information2: `About Store`,
    information3: `Contact Us`,
    information4: `Latest News`,
    information5: `Our Sitemap`,
    information6: `Orders History`,

    menuTitle: `FOOTER MENU`,
    menu1: `Instagram profile`,
    menu2: `New Collection`,
    menu3: `Contact Us`,
    menu4: `Latest News`,
    menu5: `Terms & Conditions`,
    menu6: `Purchase Theme`,

    linksTitle: `USEFUL LINKS`,
    link1: `Instagram profile`,
    link2: `New Collection`,
    link3: `Contact Us`,
    link4: `Latest News`,
    link5: `Terms & Conditions`,
    link6: `Purchase Theme`,

    abooutTitle: `ABOUT THE STORE`,
  };

  return (
    <div className={styles.footer}>
      <ConatctsSection />
      <InfoSection
        title={info.infoTitle}
        info1={info.information1}
        info2={info.information2}
        info3={info.information3}
        info4={info.information4}
        info5={info.information5}
        info6={info.information6}
      />
      <InfoSection
        title={info.menuTitle}
        info1={info.menu1}
        info2={info.menu2}
        info3={info.menu3}
        info4={info.menu4}
        info5={info.menu5}
        info6={info.menu6}
      />
      <InfoSection
        title={info.linksTitle}
        info1={info.link1}
        info2={info.link2}
        info3={info.link3}
        info4={info.link4}
        info5={info.link5}
        info6={info.link6}
      />
      <Aboutsection title={info.abooutTitle} />
    </div>
  );
}

export default Footer;
