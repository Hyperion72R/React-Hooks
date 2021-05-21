import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const ImageRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setinView(isinView());
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const [inView, setinView] = useState(false);

  const isinView = () => {
    if (ImageRef.current) {
      const rect = ImageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setinView(() => {
      return isinView();
    });
  };

  return <img src={inView ? secondaryImg : primaryImg} alt="" ref={ImageRef} />;
};

export default ImageToggleOnScroll;
