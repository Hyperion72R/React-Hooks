import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((ImgId) => {
        return (
          <div key={ImgId}>
            <ImageChangeOnScroll
              primaryImg={`/images/Img-${ImgId}.jpg`}
              secondaryImg={`/images/Img-${ImgId}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
