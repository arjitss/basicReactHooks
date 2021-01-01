import React, { useEffect, useState } from 'react'

const ImageUseEffectTrial = () =>{
    let[ buttonClicked, updateButtonCliked] = useState(false);
    let[ mouseOver, updateMouseOver] = useState(false);
    const onClickHandler = () => {
        buttonClicked = buttonClicked ? false : true
        updateButtonCliked(buttonClicked)
    }
    const onMouseOverHandler = () => {
        mouseOver = mouseOver ? false : true
        updateMouseOver(mouseOver)        
    }
    useEffect(()=>{
        if(buttonClicked)
            console.log('Component Did Update')
        else
            console.log('Component Did Mount')

        return (() => {
            console.log('Component Will UnMount')
        })
    },[mouseOver])

    return(
        <div>
            <span>{mouseOver ? 'True' : 'False'}</span>
            <button onClick={onClickHandler}> Click Me!
            </button>
            <img onMouseOver={onMouseOverHandler} src='/static/WC_bw.png'></img>

        </div>
    )

}

export default ImageUseEffectTrial;