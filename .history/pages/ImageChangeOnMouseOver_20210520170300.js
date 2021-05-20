import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/images/monkey.jpg"
        secondaryImg="/images/monkeyColor.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/images/island.jpg"
        secondaryImg="/images/islandColor.jpg"
        alt=""
      />
    </div>
  );
};
 
export default ImageChangeOnMouseOver;
