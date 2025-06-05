import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'dark' || savedTheme === 'light') {
            setTheme(savedTheme);
        } else {
            // Fall back to system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
        
        setIsLoading(false);
    }, []);


    useEffect(() => {
        if (!isLoading) {

            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
            
            // Save to localStorage
            localStorage.setItem('theme', theme);
        }
    }, [theme, isLoading]);


    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    // Provide only what's actually used
    const value = {
        toggleTheme,
        isDark: theme === 'dark'
    };

    // Brief loading state
    if (isLoading) {
        return null;
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};