import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

    const formatPrice = (value) =>
        value.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <div className="container my-4">
            <h1 className="section-heading mb-1">My Shopping Bag</h1>
            <p className="section-subheading" style={{ marginBottom: '0.5rem' }}>
                {cart.length} {cart.length === 1 ? 'item' : 'items'}
            </p>
            <div className="section-divider"></div>

            {cart.length === 0 ? (
                <div className="empty-state">
                    <i className="fas fa-shopping-bag"></i>
                    <h4>Your bag is empty</h4>
                    <p>Add some products to your bag to get started.</p>
                    <Link to="/products" className="btn-primary-brand text-decoration-none" style={{ display: 'inline-block' }}>
                        <i className="fas fa-store me-2"></i>Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="row g-4">
                    {/* Cart Items */}
                    <div className="col-lg-8">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item-card">
                                {item.image && (
                                    <img src={item.image} alt={item.name} className="cart-item-img" />
                                )}
                                <div style={{ flex: 1 }}>
                                    <div className="product-category-tag" style={{ fontSize: '0.7rem' }}>{item.category}</div>
                                    <h6 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, marginBottom: '0.25rem' }}>
                                        {item.name}
                                    </h6>
                                    <span className="price-current">₱{formatPrice(item.price)}</span>
                                </div>

                                {/* Qty Controls */}
                                <div className="d-flex align-items-center gap-2">
                                    <button className="cart-qty-btn" onClick={() => decreaseQty(item.id)}>−</button>
                                    <span className="cart-qty-value">{item.qty || 1}</span>
                                    <button className="cart-qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                                </div>

                                {/* Subtotal */}
                                <div style={{ minWidth: 90, textAlign: 'right' }}>
                                    <div style={{ fontWeight: 700, color: 'var(--blush-dark)', fontSize: '1rem' }}>
                                        ₱{formatPrice(item.price * (item.qty || 1))}
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.75rem', cursor: 'pointer', padding: 0, marginTop: 4 }}
                                    >
                                        <i className="fas fa-trash-alt me-1"></i>Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-4">
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1.5px solid var(--border-color)',
                            borderRadius: 16,
                            padding: '1.5rem',
                            position: 'sticky',
                            top: 'calc(var(--navbar-height) + 1rem)'
                        }}>
                            <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '1.25rem' }}>
                                Order Summary
                            </h5>

                            <div className="d-flex justify-content-between mb-2" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                <span>Subtotal ({cart.length} items)</span>
                                <span>₱{formatPrice(total)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                <span>Shipping</span>
                                <span style={{ color: total >= 999 ? '#6ab04c' : 'var(--text-secondary)' }}>
                                    {total >= 999 ? 'FREE' : '₱99.00'}
                                </span>
                            </div>
                            <hr style={{ borderColor: 'var(--border-color)' }} />
                            <div className="d-flex justify-content-between mb-4">
                                <span style={{ fontWeight: 700 }}>Total</span>
                                <span className="price-current" style={{ fontSize: '1.2rem' }}>
                                    ₱{formatPrice(total >= 999 ? total : total + 99)}
                                </span>
                            </div>

                            {total < 999 && (
                                <div style={{
                                    background: 'var(--blush-light)',
                                    borderRadius: 10,
                                    padding: '0.6rem 1rem',
                                    fontSize: '0.78rem',
                                    color: 'var(--blush-dark)',
                                    marginBottom: '1rem'
                                }}>
                                    <i className="fas fa-truck me-2"></i>
                                    Add ₱{formatPrice(999 - total)} more for free shipping!
                                </div>
                            )}

                            <Link to="/checkout" className="btn-add-cart text-decoration-none" style={{ fontSize: '1rem', padding: '0.75rem' }}>
                                <i className="fas fa-lock me-2"></i>Proceed to Checkout
                            </Link>
                            <Link to="/products" className="btn-outline-brand text-decoration-none d-block text-center mt-2" style={{ fontSize: '0.85rem' }}>
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;