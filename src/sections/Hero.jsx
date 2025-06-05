import React, { useEffect, useRef } from 'react'
import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useMediaQuery } from 'react-responsive';
import {useTheme} from "../contexts/ThemeContext.jsx"; // Update the import path

const Hero = () => {
    const { isDark } = useTheme(); // Get theme state
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const slideRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {
        // Original hero animation
        gsap.fromTo(".hero-animate",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power2.inOut"
            },
        )
    })

    // GSAP Text Slider Animation
    useGSAP(() => {
        // Animation configuration - customize these values
        const animationConfig = {
            transitionDuration: 1.2,
            pauseDuration: 1,
            initialDelay: 0.3,
            ease: "power2.inOut"
        };

        if (!wrapperRef.current || !slideRef.current) return;

        const wrapper = wrapperRef.current;
        const items = wrapper.children;

        if (items.length === 0) return;

        // Get the height of each item dynamically
        const getItemHeight = () => {
            return items[0].offsetHeight;
        };

        const createSliderAnimation = () => {
            const itemHeight = getItemHeight();
            const totalItems = items.length;

            // Create timeline
            const tl = gsap.timeline({
                repeat: -1,
                ease: animationConfig.ease
            });

            // Add initial delay
            tl.to({}, { duration: animationConfig.initialDelay });

            // Animate through each item
            for (let i = 0; i < totalItems; i++) {
                tl.to(wrapper, {
                    y: -itemHeight * i,
                    duration: animationConfig.transitionDuration,
                    ease: animationConfig.ease
                })
                    .to({}, { duration: animationConfig.pauseDuration }); // Pause between transitions
            }

            // Return to start
            tl.to(wrapper, {
                y: 0,
                duration: animationConfig.transitionDuration,
                ease: animationConfig.ease
            });

            return tl;
        };

        // Initial animation
        let animation = createSliderAnimation();

        // Handle resize to recalculate heights
        const handleResize = () => {
            animation.kill();
            gsap.set(wrapper, { y: 0 });
            setTimeout(() => {
                animation = createSliderAnimation();
            }, 100);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            animation.kill();
        };
    }, [words]);

    return (
        <section id="hero" className="relative overflow-hidden md:pt-18 lg:pt-24 xl:pt-0">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>
            <div className="hero-layout">
                <header className="flex flex-col justify-center mid:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1 className="hero-animate">
                                Sculpting<span className="xl:ml-3 lg:ml-2 md:ml-1"></span>
                                <span
                                    className="slide-gsap"
                                    ref={slideRef}
                                >
                                    <span
                                        className="wrapper-gsap"
                                        ref={wrapperRef}
                                    >
                                        {words.map((word, index) => (
                                            <span
                                                key={`${word.text}-${index}`}
                                                className="flex items-center md:gap-3 gap-1 pb-2 slider-item"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className={`xl:size-12 md:size-10 size-7 md:p-3 p-1 rounded-full flex-shrink-0 ${
                                                        isDark ? 'bg-[#CBFFFF]' : 'bg-teal-200/50'
                                                    }`}
                                                />
                                                <span className="whitespace-nowrap">{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1 className="hero-animate">into Radiant Smiles</h1>
                            <h1 className="hero-animate">with Precision and Care</h1>
                        </div>

                        <p className={`${isDark ? 'text-white-50' : 'text-[#4A5568]'} md:text-xl relative z-10 pointer-events-none hero-animate max-w-4/6`}>
                            Pioneer in Digital Dentistry. First to embrace the latest technology to deliver precisely crafted restorations.
                        </p>

                        <Button
                            className="md:w-80 md:h-16 w-60 h-12 hero-animate"
                            text="Learn More"
                            arrow={true}
                            href="#counter"
                        />
                    </div>
                </header>
                {!isTablet && (
                    <figure>
                        <div className="hero-3d-layout">
                            <HeroExperience />
                        </div>
                    </figure>
                )}
            </div>
            <AnimatedCounter />
        </section>
    )
}

export default Hero