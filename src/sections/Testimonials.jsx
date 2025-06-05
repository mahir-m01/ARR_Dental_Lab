import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import {useTheme} from "../contexts/ThemeContext.jsx";

const Testimonials = () => {
    const {isDark} = useTheme();
    return (
        <section id="testimonials" className="flex-center section-padding scroll-mt-40">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Testimonials"
                />
                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <GlowCard card={testimonial} key={index} index={index}>
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className={`font-bold ${isDark ? "text-[#079D9C]" : "text-[#034443]"}`}>{testimonial.name}</p>
                                    <p className="text-white-50">{testimonial.sub}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;