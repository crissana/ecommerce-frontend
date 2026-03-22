import { createContext, useState, useEffect } from 'react';

export const RecentlyViewedContext = createContext();

const RecentlyViewedProvider = ({ children }) => {
    const [recentlyViewed, setRecentlyViewed] = useState(() => {
        try {
            const stored = localStorage.getItem('grwm_recently_viewed');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('grwm_recently_viewed', JSON.stringify(recentlyViewed));
    }, [recentlyViewed]);

    const addRecentlyViewed = (product) => {
        setRecentlyViewed(prev => {
            // Remove duplicate if exists
            const filtered = prev.filter(item => item.id !== product.id);
            // Add to beginning, keep only last 6
            return [product, ...filtered].slice(0, 6);
        });
    };

    const clearRecentlyViewed = () => setRecentlyViewed([]);

    return (
        <RecentlyViewedContext.Provider value={{ recentlyViewed, addRecentlyViewed, clearRecentlyViewed }}>
            {children}
        </RecentlyViewedContext.Provider>
    );
};

export default RecentlyViewedProvider;
