import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

import img1 from "../../../assets/Slider/img1.jpg";
import img2 from "../../../assets/Slider/img2.jpg";
import img3 from "../../../assets/Slider/img3.jpg";
import img4 from "../../../assets/Slider/img4.jpg";
import { Image } from "react-bootstrap";

const listImage = [img1, img2, img3, img4];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="home-container">
      <Carousel className="slide-container">
        {listImage.map((img) => (
          <Carousel.Item interval={1500}>
            <Image
              src={img}
              alt="Image One"
              style={{ width: "100%", height: 500 }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
