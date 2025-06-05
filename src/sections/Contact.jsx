import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import TitleHeader from "../components/TitleHeader";
import {useTheme} from "../contexts/ThemeContext.jsx";

const Contact = () => {
    const {isDark} = useTheme();
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get in Touch With Us"
                />
                <div className="mt-16">
                    <div className={`flex-center card-border rounded-xl p-10 w-full max-w-3xl mx-auto ${isDark ? "bg-transparent" : "bg-teal-200/50"}`}>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col gap-7 "
                        >
                            <div>
                                <label htmlFor="name" className="text-[#079D9C]">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What’s your name?"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-[#079D9C]">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What’s your email address?"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-[#079D9C]">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    rows="5"
                                    required
                                />
                            </div>

                            <button type="submit" className="w-[13.75rem] md:w-80 self-center">
                                <div className="cta-button group">
                                    <div className="bg-circle" />
                                    <p className="text">
                                        {loading ? "Sending..." : "Send Message"}
                                    </p>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;