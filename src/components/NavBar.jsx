import React, { useEffect, useState } from 'react';
import { navLinks } from "../constants/index.js";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    <img
                        src="/images/arrlogo.png"
                        alt="logo"
                        className="h-14 w-14 md:h-32 md:w-32 object-contain"
                    />
                    ARR Dental Lab
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                {link.startsWith('/') ? (
                                    <Link to={link}>
                                        <span>{name}</span>
                                        <span className="underline" />
                                    </Link>
                                ) : (
                                    <a href={link}>
                                        <span>{name}</span>
                                        <span className="underline" />
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact us</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;