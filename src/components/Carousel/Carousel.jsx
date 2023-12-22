import React from "react";
import "../Carousel/Carousel css/Carousel.css";
const Carousel = () => {
  return (
    <>
      <div className=" grid grid-cols-2 gap-2 ">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt
          />
        </div>
      </div>
      </>
  );
};

export default Carousel;
