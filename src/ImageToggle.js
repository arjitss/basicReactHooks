import React,{useRef} from 'react';

const ImageToggle = (props) => {
    const imageRef = useRef(null);
    return (
        <img onMouseOver = {()=>{
            imageRef.current.src = props.secondryImg
        }}
        onMouseOut = {() => {
            imageRef.current.src = props.primaryImg
        }}
        src={props.primaryImg}
        ref={imageRef}
        />
    )
}

export default ImageToggle;