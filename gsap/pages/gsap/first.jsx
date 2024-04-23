import React, { useEffect } from 'react'
import gsap from 'gsap'

const First = () => {
    useEffect(() => {
  
        gsap.from(".cirle", {
            duration: 1,
            opacity: 0,
            y: "random(-200, 200)",
            stagger: 0.35
        });
    }, [])
    return (
        <div className="flex flex-col">
            <style jsx>{`
                .box {
                  width: 100px;
                  height: 100px;
                  margin: 10px;
                  text-align: center;
                  line-height: 100px;
                }
                .b1 {
                  background-color: pink;
                }
                .b2 {
                  background-color: green;
                }
                .b3 {
                  background-color: gray;
                }
                .b4 {
                  background-color: lightblue;
                }
                .cirle {
                  margin: 20px;
                  height: 50px;
                  width: 50px;
                  border-radius: 50px;
                  background-color: pink;
                }
                `}</style>
            <div>
                <div className="box b1">沒設</div>
                <div className="box b2">power1.out</div>
                <div className="box b3">linear</div>
                <div className="box b4">none</div>
            </div>
            <div className='flex'>
                <div className="cirle"></div>
                <div className="cirle"></div>
                <div className="cirle"></div>
                <div className="cirle"></div>
                <div className="cirle"></div>
            </div>
        </div>
    )
}

export default First