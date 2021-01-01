import React from "react";
import ImageToggle from '../src/ImageToggle';

const ImageColourChange = () => {
  return (
    <div>
      <ImageToggle
        primaryImg="/static/WC_bw.png"
        alt=""
        secondryImg="/static/WC.png"
      ></ImageToggle>
      <br></br>
      <img src="" alt=""></img>
    </div>
  );
};

export default ImageColourChange;
