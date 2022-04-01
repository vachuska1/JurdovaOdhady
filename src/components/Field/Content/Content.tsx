import * as React from "react";
import "./Content.less";
import { Carousel } from "react-responsive-carousel";
import "./ReactSlider.less";

const images = [
  { url: "./src/images/Carousel/Carousel1.jpg" },
  { url: "./src/images/Carousel/Carousel2.jpg" },
  { url: "./src/images/Carousel/Carousel3.jpg" },
  { url: "./src/images/Carousel/Carousel4.jpg" },
];

export const Content = () => {
  return (
    <div className="Content">
      <Carousel showStatus={false} showThumbs={false}>
        {images.map((image) => {
          return (
            <div>
              <img src={image.url} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
