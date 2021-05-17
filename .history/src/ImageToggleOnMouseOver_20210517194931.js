import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const ImageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {}}
      onMouseOut={() => {}}
      src={primaryImg}
      alt=""
      ref={ImageRef}
    />
  );
};

export default ImageToggleOnMouseOver;
