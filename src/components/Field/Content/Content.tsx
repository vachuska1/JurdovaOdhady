import * as React from "react";
import "./Content.less";
import { Carousel } from "react-responsive-carousel";
import "./ReactSlider.less";
import { useState, useEffect } from "react";

const images = [
  { url: "./src/images/Carousel/FamilyHouse5.jpg" },
  { url: "./src/images/Carousel/FamilyHouse3.jpg" },
  { url: "./src/images/Carousel/FamilyHouse6.jpg" },
  { url: "./src/images/Carousel/FamilyHouse2.jpg" },
  { url: "./src/images/Carousel/FamilyHouse1.jpg" },
];
const imagesMob = [
  { url: "./src/images/Carousel/FamilyHouseMob5.jpg" },
  { url: "./src/images/Carousel/FamilyHouseMob3.jpg" },
  { url: "./src/images/Carousel/FamilyHouseMob6.jpg" },
  { url: "./src/images/Carousel/FamilyHouseMob2.jpg" },
  { url: "./src/images/Carousel/FamilyHouseMob1.jpg" },
];

export const Content = () => {
  const [destkop, setDestkop] = useState<boolean>(false);

  useEffect(() => {
    handleResizeViewport();
  }, []);
  window.addEventListener("resize", () => {
    handleResizeViewport();
  });

  const handleResizeViewport = () => {
    setDestkop(document.body.offsetWidth > 670);
  };

  return destkop ? (
    <div className="Content">
      <Carousel
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {images.map((image) => {
          return (
            <div>
              <img src={image.url} />
            </div>
          );
        })}
      </Carousel>
    </div>
  ) : (
    <div className="ContentMob">
      <Carousel
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {imagesMob.map((imageMob) => {
          return (
            <div>
              <img src={imageMob.url} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
