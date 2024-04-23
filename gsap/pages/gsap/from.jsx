import React, { useRef, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap';

const CallBackFunction = () => {
    const box3Ref = useRef(null)
    useLayoutEffect(() => {
        let from = gsap.from(box3Ref.current, { duration: "2", opacity: "0", scale: "0.3", ease: "back" });
        return () => { from.kill(); };

        
    }, [box3Ref]);
    return (
        <div className='flex m-10'>
            <div className='box3 w-[100px] h-[100px] bg-green-300 m-10' ref={box3Ref}></div>
        </div>
    )
}

export default CallBackFunction