import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const ImageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setinView(isinView());
    setIsLoading(false);
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
    return true;
  };

  const scrollHandler = () => {
    setinView(() => {
      return isinView();
    });
  };

  return isLoading ? null : (
    <img src={inView ? secondaryImg : primaryImg} alt="" ref={ImageRef} />
  );
};

export default ImageToggleOnScroll;
