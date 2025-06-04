import React from 'react';
import { logoIconsList } from "../constants/index.js";
import TitleHeader from "../components/TitleHeader.jsx";

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name || "logo"} />
        </div>
    );
};

const LogoSection = () => {
    return (
        <section id="partners" className="scroll-mt-40">
            <div className="w-full max-h-full md:px-10 px-5 mt-32">
                <TitleHeader title="Our Trusted Partners" />
            </div>
            <div className="md:my-20 my-10 relative">
                <div className="gradient-edge"></div>
                <div className="gradient-edge"></div>

                <div className="marquee h-44">
                    <div className="marquee-box md:gap-20 gap-5 bg-zinc-900">
                        {[...logoIconsList, ...logoIconsList].map((icon, idx) => (
                            <LogoIcon key={idx} icon={icon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoSection;