import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[1, 2].map((ImgId) => {
        return (
          <div key={ImgId}>
            <ImageToggleOnScroll
              primaryImg={`/images/ImgScroll/NC/Img-${ImgId}.jpg`}
              secondaryImg={`/images/ImgScroll/Img-${ImgId}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
