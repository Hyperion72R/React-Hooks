import React, { useEffect, useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const ImageRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  });

  return <img src={primaryImg} alt="" ref={ImageRef} />;
};

export default ImageToggleOnMouseOver;
