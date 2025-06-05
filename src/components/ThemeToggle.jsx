// components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`theme-toggle-btn ${className}`}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
            <div className="theme-toggle-inner">
                {/* Sun Icon */}
                <svg
                    className={`sun-icon ${isDark ? 'hidden' : 'visible'}`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>

                {/* Moon Icon */}
                <svg
                    className={`moon-icon ${isDark ? 'visible' : 'hidden'}`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            </div>
        </button>
    );
};

export default ThemeToggle;