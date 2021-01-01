import React, {useRef} from "react";

const ImageToggleSecondTime = (props) => {
    const ImageReference = useRef(null);
    const DivReference = useRef(null);
  return (
    <div ref={DivReference} onMouseOver={() => {DivReference.current.align='center'}} onMouseOut = {()=> {DivReference.current.align='left'}}>
      <img
        onMouseOver={() => {ImageReference.current.src = props.primaryImg}}
        onMouseOut={() => {ImageReference.current.src = props.secondryImg}}
        src={props.primaryImg}
        ref={ImageReference}
      ></img>
    </div>
  );
};

export default ImageToggleSecondTime;
