import React from 'react';
import { Link } from 'react-router-dom';
import {useTheme} from "../contexts/ThemeContext.jsx";

const Button = ({ className, id, text, arrow, href }) => {
    const {isDark} = useTheme();
    const handleClick = (e) => {
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                const offset = window.innerHeight * 0.15;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        } else if (id) {
            e.preventDefault();
            const target = document.getElementById(id);
            if (target) {
                const offset = window.innerHeight * 0.15;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    };

    const content = (
        <div className="cta-button">
            <p className="text">{text}</p>
        </div>
    );

    if (href) {
        // Check if href is internal route
        if (href.startsWith("/")) {
            return (
                <Link to={href} className={`${className ?? ''} cta-wrapper`}>
                    {content}
                </Link>
            );
        }

        // If href is an anchor link, handle scroll on click
        if (href.startsWith("#")) {
            return (
                <a href={href} onClick={handleClick} className={`${className ?? ''} cta-wrapper`}>
                    {content}
                </a>
            );
        }

        // External link (other href)
        return (
            <a href={href} className={`${className ?? ''} cta-wrapper`} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    // scroll-to section if only id is present
    return (
        <a onClick={handleClick} className={`${className ?? ''} cta-wrapper`}>
            {content}
        </a>
    );
};

export default Button;