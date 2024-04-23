import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { gsap } from "gsap";

const To = () => {
    useEffect(() => {
        gsap.from(".box3", { duration: "2", opacity: "0", scale: "0.3", ease: "back" })
    }, [])
    return (
        <div className='flex m-10'>
            <div className='box3 w-[100px] h-[100px] bg-green-300 m-10' ></div>
        </div>
    )
}

export default To