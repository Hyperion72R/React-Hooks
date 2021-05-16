import React from "react";

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
