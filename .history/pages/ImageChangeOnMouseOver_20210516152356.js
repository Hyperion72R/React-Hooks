import React from "react";
import Image from "next/image";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <img src="/monkey.jpg" alt="" />
      &nbsp;&nbsp;&nbsp;
      <img src="public/image/island.jpg" alt="" />
    </div>
  );
};

export default ImageChangeOnMouseOver;
