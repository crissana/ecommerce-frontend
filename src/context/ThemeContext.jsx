import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        try {
            return localStorage.getItem('grwm_theme') === 'dark';
        } catch {
            return false;
        }
    });

    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('grwm_theme', theme);
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
