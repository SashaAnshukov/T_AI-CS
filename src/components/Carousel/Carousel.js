import React, { useState } from "react";
import styles from "./styles.module.scss";
import Card from "../Card/Card";
import { ConfigProvider, Radio } from "antd";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from "../../images/welcome-3 1.svg";
import Logo2 from "../../images/welcome-32.svg";
import Logo3 from "../../images/welcome-33.svg";
import Logo4 from "../../images/welcome-34.svg";
import Logo5 from "../../images/welcome-35.svg";

function Carousel() {
  const card = [
    {
      img: Logo1,
      title: "Naxly as the Winners in Global Agency Awards",
      description:
        "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
      id: 1,
    },
    {
      img: Logo2,
      title: "Expert Prespective Agency Awards",
      description:
        "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
      id: 2,
    },
    {
      img: Logo3,
      title: "Business Prespective Global Agency Awards",
      description:
        "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
      id: 3,
    },
    {
      img: Logo4,
      title: "Value for Results in Global Agency Awards",
      description:
        "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
      id: 4,
    },
    {
      img: Logo5,
      title: "Global Experience in Agency Awards",
      description:
        "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
      id: 5,
    },
  ];

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <section className={styles.elements}>
        {card.map((item) => {
          return <Card card={item} key={item.id} />;
        })}
      </section>
      <Radio.Group
        className={styles.radioGroup}
        onChange={onChange}
        value={value}
      >
        <ConfigProvider
          theme={{
            components: {
              Radio: {
                colorPrimary: "#2C3647",
                borderRadius: 10,
                colorBgContainer: "#262f3d",
                colorBorder: "#262f3d",
                colorWhite: "#2C3647",
              },
            },
          }}
        >
          <Radio value={1}></Radio>
          <Radio value={2}></Radio>
          <Radio value={3}></Radio>
        </ConfigProvider>
      </Radio.Group>
    </>
  );
}

export default Carousel;
