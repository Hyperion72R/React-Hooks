import React from "react";
import ImageToogleOnMouseOver from "../src/ImageToogleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToogleOnMouseOver
        primaryImg="/images/monkey.jpg"
        secondaryImg="/images/monkeyColor.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToogleOnMouseOver
        primaryImg="/images/island.jpg"
        secondaryImg="/images/islandColor.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
