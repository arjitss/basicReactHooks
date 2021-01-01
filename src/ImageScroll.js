import React, { useRef, useEffect, useState } from 'react';

const ImageScroll = (props) => {
  const imgRef = useRef(null);
  const isInView = () => {
    const rect = imgRef.current.getBoundingClientRect();
    return rect.top > 0 && rect.bottom <= window.innerHeight;  
  }
  const [inView, setInView] = useState(false);
  const scrollHandler = () => {
    setInView(isInView());
  }
  useEffect(() => {
      // after component mount, check the initial condition
      setInView(isInView());
      console.log('In Use Effect', props.imgValue);
    window.addEventListener('scroll', scrollHandler);
    return () => {
        console.log('In Use Effect Cleanup', props.imgValue);
      window.removeEventListener('scroll', scrollHandler);
    };
  });
return (
    <div> props.imgValue
<img src={inView ? props.secondryImg : props.primaryImg} ref={imgRef} alt={props.imgValue}></img>
</div>
)
};
export default ImageScroll;
