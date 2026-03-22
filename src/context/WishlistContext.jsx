import { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        try {
            const stored = localStorage.getItem('grwm_wishlist');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('grwm_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.filter(item => item.id !== product.id);
            }
            return [...prev, product];
        });
    };

    const isWishlisted = (id) => wishlist.some(item => item.id === id);

    const removeFromWishlist = (id) => {
        setWishlist(prev => prev.filter(item => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistProvider;
