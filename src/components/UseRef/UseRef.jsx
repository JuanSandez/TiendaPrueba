import React, { useRef, useState } from 'react'
import react from '../../assets/react.svg'

const UseRef = () => {
    const imageRef = useRef()
    const [isZoomed, setIsZoomed] = useState(false);
    const handleClick = () => {
        if(isZoomed){
            imageRef.current.style.transform = 'scale(1)'
        }else{
            imageRef.current.style.transform = 'scale(2)'
        }
        setIsZoomed(!isZoomed)
        console.log(isZoomed)
    }
  return (
    <div>
        <img src={react}
        onClick={handleClick}
        style={{width: '40%'}}
        ref={imageRef}
         alt="" />
    </div>
  )
}

export default UseRef