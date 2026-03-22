import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ searchQuery = '', onSearchChange = null }) => {
    const { cart } = useContext(CartContext);
    const { wishlist } = useContext(WishlistContext);
    const { isDark, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const totalQty = cart ? cart.reduce((acc, item) => acc + (item.qty || item.quantity || 1), 0) : 0;
    const wishlistCount = wishlist ? wishlist.length : 0;

    const navItems = [
        { to: '/', label: 'Home', icon: 'fa-home', end: true },
        { to: '/products', label: 'Products', icon: 'fa-store' },
        { to: '/wishlist', label: 'Wishlist', icon: 'fa-heart', badge: wishlistCount },
        { to: '/cart', label: 'Cart', icon: 'fa-shopping-bag', badge: totalQty },
        { to: '/about', label: 'About', icon: 'fa-info-circle' },
    ];

    return (
        <>
            {/* ===== DESKTOP NAVBAR ===== */}
            <nav className="grwm-navbar d-none d-lg-flex align-items-center px-4" style={{ gap: '1rem' }}>
                {/* Brand */}
                <Link to="/" className="navbar-brand-name text-decoration-none me-3">
                    GRWM <span>✦</span>
                </Link>

                {/* Nav Links */}
                <div className="d-flex align-items-center gap-1 me-auto">
                    <NavLink to="/" end className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}>
                        Shop
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}>
                        Contact
                    </NavLink>
                    <NavLink to="/blog" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}>
                        Blog
                    </NavLink>
                </div>

                {/* Search Bar */}
                {onSearchChange !== null && (
                    <div className="position-relative">
                        <i className="fas fa-search position-absolute" style={{
                            left: '12px', top: '50%', transform: 'translateY(-50%)',
                            color: 'var(--text-muted)', fontSize: '0.8rem'
                        }}></i>
                        <input
                            type="text"
                            className="navbar-search-input"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={e => onSearchChange(e.target.value)}
                            style={{ paddingLeft: '2rem' }}
                        />
                    </div>
                )}
                {onSearchChange === null && (
                    <button
                        className="nav-icon-btn"
                        onClick={() => navigate('/products')}
                        title="Search Products"
                    >
                        <i className="fas fa-search"></i>
                    </button>
                )}

                {/* Dark Mode Toggle */}
                <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
                    <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
                    <span className="d-none d-xl-inline">{isDark ? 'Light' : 'Dark'}</span>
                </button>

                {/* Wishlist */}
                <Link to="/wishlist" className="nav-icon-btn position-relative text-decoration-none" title="Wishlist">
                    <i className="far fa-heart"></i>
                    {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
                </Link>

                {/* Cart */}
                <Link to="/cart" className="nav-icon-btn position-relative text-decoration-none" title="Shopping Bag">
                    <i className="fas fa-shopping-bag"></i>
                    {totalQty > 0 && <span className="nav-badge">{totalQty}</span>}
                </Link>
            </nav>

            {/* ===== MOBILE TOP NAVBAR ===== */}
            <nav className="grwm-navbar d-flex d-lg-none align-items-center justify-content-between px-3">
                <Link to="/" className="navbar-brand-name text-decoration-none" style={{ fontSize: '1.2rem' }}>
                    GRWM <span>✦</span>
                </Link>

                <div className="d-flex align-items-center gap-2">
                    <button className="theme-toggle py-1 px-2" onClick={toggleTheme} style={{ fontSize: '0.75rem', gap: '0.3rem' }}>
                        <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
                    </button>
                    <Link to="/cart" className="nav-icon-btn position-relative text-decoration-none">
                        <i className="fas fa-shopping-bag"></i>
                        {totalQty > 0 && <span className="nav-badge">{totalQty}</span>}
                    </Link>
                </div>
            </nav>

            {/* ===== MOBILE BOTTOM NAVBAR ===== */}
            <nav className="mobile-bottom-nav">
                {navItems.map(item => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                    >
                        <div className="position-relative">
                            <i className={`fas ${item.icon}`}></i>
                            {item.badge > 0 && <span className="nav-badge">{item.badge}</span>}
                        </div>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </>
    );
};

export default Navbar;