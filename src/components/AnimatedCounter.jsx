import React, {useEffect, useRef, useState} from 'react'
import {counterItems} from "../constants/index.js";
import CountUp from "react-countup";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const countRef = useRef(null);
    const [startCounting, setStartCounting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: countRef.current,
                scroller: "body",
                markers: false,
                start: "top 82%",
                end: "top 0",
                scrub: 2,
                once: true,
                onEnter: () => {
                    setIsVisible(true);
                    setStartCounting(true);
                },
            }
        })
        return () => {tl.kill()}
    }, []);

    return (
        <div
            id="counter"
            ref={countRef}
            className={`padding-x-lg xl:mt-0 md:mt-32 mt-45 transition-opacity duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="mx-auto grid-4-cols"> {/*Custom Classes*/}
                {counterItems.map((item, index)=>(
                    <div
                        key={item.label}
                        className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                    >
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            {
                                startCounting
                                    ? <CountUp suffix={item.suffix} end={item.value} />
                                    : `0${item.suffix || ''}`
                            }
                        </div>
                        <div className="text-white-50 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AnimatedCounter