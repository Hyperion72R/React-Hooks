import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const ImageRef = useRef(null);
  // console.log(ImageRef.current);
  return (
    <img
      onMouseOver={() => {
        ImageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        ImageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=""
      ref={ImageRef}
    />
  );
};

export default ImageToggleOnMouseOver;
