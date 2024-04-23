import React, { useRef, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap';

const CallBackFunction = () => {
    const box3Ref = useRef(null)
    useEffect(() => {
        // gsap.set(".box1, .box2", { transformOrigin: "40% 20%" })
        // gsap.to(".box1, .box2", { duration: "3", rotation: '360' });

        /* onUpdate是一個回調函數，它在每次更新動畫時被調用1。在您的代碼中，onUpdate函數用於在控制台中打印myObject.rotation的當前值。這對於調試和理解動畫的進度非常有用1。希望這對您有所幫助！

 */
        // let myObject = { rotation: 0 };
        // gsap.to(myObject, {
        //     duration: "3", rotation: "360", onUpdate: function () {
        //         console.log(myObject.rotation)
        //     }
        // });


        gsap.from(box3Ref.current, { duration: "2", opacity: "0", scale: "0.3", ease: "back" })

    }, [box3Ref]);
    return (
        <div className='flex m-10'>
            <div className='box1 w-[100px] h-[100px] bg-yellow-400 m-10'></div>
            <div className='box2 w-[100px] h-[100px] bg-blue-400 m-10'></div>
            <div className='box3 w-[100px] h-[100px] bg-green-300 m-10' ref={box3Ref}></div>
        </div>
    )
}

export default CallBackFunction