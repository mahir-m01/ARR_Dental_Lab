import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ className, id, text, arrow, href }) => {
    const handleClick = (e) => {
        if (id) {
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
        <div className="cta-button group">
            <div className="bg-circle"></div>
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
                {arrow ? (
                    <img src="/images/arrow-down.svg" alt="arrow" />
                ) : (
                    <img src="/images/arrow-down.svg" alt="arrow" className="rotate-[225deg]" />
                )}
            </div>
        </div>
    );

    if (href) {
        // external or internal route link
        const isInternal = href.startsWith("/");
        return isInternal ? (
            <Link to={href} className={`${className ?? ''} cta-wrapper`}>
                {content}
            </Link>
        ) : (
            <a href={href} className={`${className ?? ''} cta-wrapper`} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    // scroll-to section if id is present
    return (
        <a onClick={handleClick} className={`${className ?? ''} cta-wrapper`}>
            {content}
        </a>
    );
};

export default Button;