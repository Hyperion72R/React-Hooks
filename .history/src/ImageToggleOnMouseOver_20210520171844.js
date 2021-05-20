import React, { useEffect, useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const ImageRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const [inView, setinView] = useState(false);

  const inView = () => {
    if (ImageRef.current) {
      const rect = ImageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  return <img src={primaryImg} alt="" ref={ImageRef} />;
};

export default ImageToggleOnMouseOver;
