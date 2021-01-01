import React, {useState} from 'react';
import ImageScroll from '../src/ImageScroll';

const ImageScrollColourChange = () => {
    const[onMouseMove, setMouseMove] = useState(0);
    const onMouseOverHandler = () => {
        setMouseMove(onMouseMove + 1);
        console.log(onMouseMove);
    }
    return(
        <div onMouseOver={onMouseOverHandler}>
            <span>MouseCount: {onMouseMove}</span>
            <div key={1}>
                <ImageScroll primaryImg="/static/WC_bw.png" secondryImg="/static/WC.png" imgValue={onMouseMove}/>
            </div>
            <div key={2}>
                <ImageScroll primaryImg="/static/WC_bw.png" secondryImg="/static/WC.png" imgValue={2}/>
            </div>
            <div key={3}>
                <ImageScroll primaryImg="/static/WC_bw.png" secondryImg="/static/WC.png" imgValue={3}/>
            </div>
        </div>
    )

}

export default ImageScrollColourChange;