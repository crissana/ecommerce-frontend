import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="grwm-footer">
            <div className="container">
                <div className="row g-4">

                    {/* Brand Column */}
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-brand">GRWM ✦</div>
                        <p className="footer-desc">
                            Get Ready With Me — your beauty companion for makeup, skincare, and everything in between.
                            We believe beauty is inclusive, high-performing, and always worth celebrating.
                        </p>
                        {/* Social Icons */}
                        <div className="footer-social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" title="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" title="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon" title="TikTok">
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" title="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="social-icon" title="Pinterest">
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="footer-heading">Quick Links</div>
                        <Link to="/" className="footer-link">Home</Link>
                        <Link to="/products" className="footer-link">Shop All</Link>
                        <Link to="/wishlist" className="footer-link">My Wishlist</Link>
                        <Link to="/about" className="footer-link">About Us</Link>
                        <Link to="/blog" className="footer-link">Beauty Blog</Link>
                        <Link to="/contact" className="footer-link">Contact Us</Link>
                    </div>

                    {/* Categories */}
                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="footer-heading">Categories</div>
                        <Link to="/products" className="footer-link">Lips</Link>
                        <Link to="/products" className="footer-link">Eyes</Link>
                        <Link to="/products" className="footer-link">Face</Link>
                        <Link to="/products" className="footer-link">Skin</Link>
                        <Link to="/products" className="footer-link">Brows</Link>
                        <Link to="/products" className="footer-link">Blush</Link>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-heading">Contact Us</div>
                        <div className="footer-contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>FEU Tech, P. Paredes St, Sampaloc, Manila, Metro Manila</span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fas fa-phone"></i>
                            <span>+63 912 345 6789</span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>support@grwmcosmetics.ph</span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fas fa-clock"></i>
                            <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-3">
                            <div className="footer-heading mb-2">Newsletter</div>
                            <div className="d-flex gap-2">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="form-control form-control-sm"
                                    style={{
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        color: 'rgba(255,255,255,0.85)',
                                        borderRadius: '8px'
                                    }}
                                />
                                <button className="btn-primary-brand" style={{ whiteSpace: 'nowrap', fontSize: '0.8rem', padding: '0.35rem 0.9rem' }}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <hr className="footer-divider" />
                <p className="footer-bottom">
                    &copy; 2026 GRWM Cosmetics. All rights reserved. Made with <i className="fas fa-heart" style={{ color: 'var(--blush)' }}></i> in Manila, PH.
                </p>
            </div>
        </footer>
    );
};

export default Footer;