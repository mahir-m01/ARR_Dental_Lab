import React from 'react'
import { abilities } from "../constants/index.js"
import TitleHeader from "../components/TitleHeader.jsx"
import {useTheme} from "../contexts/ThemeContext.jsx";

const FeatureCards = () => {
    const {isDark} = useTheme();
    return (
        <section id="features" className="w-full padding-x-lg">
            <div className="w-full max-h-full md:px-10 px-5 mt-15 md:mt-32">
                <TitleHeader title="We Ensure" />
            </div>
            <div className="mx-auto grid-3-cols mt-10 md:mt-15">
                {abilities.map(({ imgPath, title, desc }, idx) => (
                    <div
                        key={title}
                        className={`card-border rounded-xl p-8 flex flex-col gap-4 
                        ${idx === 2 ? 'md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto' : 'md:col-span-2 lg:col-span-1 '} ${isDark ? "bg-zinc-900" : "bg-[#079D9C]"}`}
                    >
                        <div className={`size-14 flex items-center justify-center rounded-full ${isDark ? 'bg-zinc-900' : 'bg-[#034443]'}`}>
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p className="text-white-50 text-lg">{desc}</p>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default FeatureCards