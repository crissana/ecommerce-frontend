import { createContext, useState, useEffect } from 'react';

// Create a Context object to share data globally 
export const CartContext = createContext();

// Provider component that wraps the app 
const CartProvider = ({ children }) => {
    // Global cart state initialized from localStorage
    const [cart, setCart] = useState(() => {
        try {
            const stored = localStorage.getItem('grwm_cart');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    // Persist cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('grwm_cart', JSON.stringify(cart));
    }, [cart]);

    // Add product to cart logic 
    const addToCart = (product) => {
        setCart(prevCart => {
            // Check if item is already in the cart 
            const existing = prevCart.find(item => item.id === product.id);

            if (existing) {
                // If it exists, increase the quantity 
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
            // If it is a new product, add it with qty = 1 
            return [...prevCart, { ...product, qty: 1 }];
        });
    };

    // Remove item completely from cart 
    const removeFromCart = (id) => {
        setCart(prevCart =>
            prevCart.filter(item => item.id !== id) 
        );
    };

    // Increase item quantity by 1 
    const increaseQty = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, qty: item.qty + 1 } 
                    : item
            )
        );
    };

    // Decrease quantity by 1, preventing it from going below 1 [cite: 84, 85, 86]
    const decreaseQty = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.qty > 1 
                    ? { ...item, qty: item.qty - 1 } 
                    : item
            )
        );
    };

    //Clear all items in cart (after checkout)
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQty,
                decreaseQty,
                clearCart
            }} 
        >
            {children} 
        </CartContext.Provider>
    );
};

export default CartProvider;