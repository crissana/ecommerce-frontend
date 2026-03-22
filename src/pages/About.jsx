import about from '../assets/images/about.webp';
import cris from '../assets/images/cris.jpg';
import { Link } from 'react-router-dom';

const stats = [
    { icon: 'fas fa-hourglass-half', value: '5+', label: 'Years in Industry' },
    { icon: 'fas fa-users', value: '100K+', label: 'Happy Clients' },
    { icon: 'fas fa-palette', value: '50+', label: 'Shades Available' },
    { icon: 'fas fa-star', value: '4.9', label: 'Average Rating' },
];

const About = () => {
    return (
        <div className="container my-4">

            {/* Hero Section */}
            <div className="row align-items-center g-5 mb-5">
                <div className="col-lg-6">
                    <img
                        src={about}
                        alt="GRWM Cosmetics Studio"
                        style={{ width: '100%', borderRadius: 20, boxShadow: 'var(--shadow-md)' }}
                    />
                </div>
                <div className="col-lg-6">
                    <div style={{ display: 'inline-block', background: 'var(--blush-light)', color: 'var(--blush-dark)', borderRadius: 20, padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: 1, marginBottom: '1rem' }}>
                        ✦ OUR STORY
                    </div>
                    <h1 className="section-heading" style={{ fontSize: '2.5rem' }}>GRWM Cosmetics</h1>
                    <p style={{ color: 'var(--blush-dark)', fontWeight: 600, marginBottom: '0.25rem' }}>Get Ready With Me</p>
                    <div className="section-divider"></div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                        At <strong>GRWM Cosmetics</strong>, we believe that beauty should be inclusive,
                        high-performing, and affordable. We specialize in cosmetics that enhance your natural
                        beauty while providing the versatility needed for your daily "Get Ready With Me" routine.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                        Founded right here in Manila, we're passionate about creating products that celebrate
                        every skin tone, skin type, and style. From bold lip tints to dewy skin serums —
                        we've got everything you need to feel confident and glam every day.
                    </p>
                    <Link to="/products" className="btn-primary-brand text-decoration-none" style={{ display: 'inline-block' }}>
                        <i className="fas fa-store me-2"></i>Shop Our Collection
                    </Link>
                </div>
            </div>

            {/* Stats */}
            <div className="row g-3 mb-5">
                {stats.map(stat => (
                    <div key={stat.label} className="col-6 col-md-3">
                        <div className="stat-card text-center">
                            <i className={`${stat.icon} mb-2`} style={{ color: 'var(--blush-dark)', fontSize: '1.5rem' }}></i>
                            <div className="stat-number">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mission */}
            <div className="row g-4 mb-5">
                <div className="col-md-4">
                    <div style={{ background: 'var(--blush-light)', borderRadius: 16, padding: '1.75rem', height: '100%' }}>
                        <i className="fas fa-heart mb-3" style={{ fontSize: '1.5rem', color: 'var(--blush-dark)' }}></i>
                        <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Our Mission</h5>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                            To make premium beauty accessible to all Filipinas — because every woman deserves
                            to feel beautiful without breaking the bank.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ background: 'var(--sand-light)', borderRadius: 16, padding: '1.75rem', height: '100%' }}>
                        <i className="fas fa-eye mb-3" style={{ fontSize: '1.5rem', color: 'var(--sand-dark)' }}></i>
                        <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Our Vision</h5>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                            To become the most loved cosmetics brand in Southeast Asia, known for quality,
                            inclusivity, and innovation in beauty.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ background: 'var(--bg-card)', border: '1.5px solid var(--border-color)', borderRadius: 16, padding: '1.75rem', height: '100%' }}>
                        <i className="fas fa-leaf mb-3" style={{ fontSize: '1.5rem', color: '#6ab04c' }}></i>
                        <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Our Values</h5>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                            Cruelty-free, dermatologist-tested formulas. We're committed to responsible
                            beauty that's good for your skin and the planet.
                        </p>
                    </div>
                </div>
            </div>

            {/* Founder Section */}
            <section className="mb-5">
                <h2 className="section-heading mb-1">Meet the Founder</h2>
                <div className="section-divider"></div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="founder-card">
                            <img
                                src={cris}
                                alt="Chloe Adriana G. — Founder"
                                style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    objectPosition: 'top center',
                                    border: '4px solid var(--blush)',
                                    margin: '0 auto 1rem',
                                    display: 'block',
                                    boxShadow: '0 6px 24px rgba(255,181,188,0.4)'
                                }}
                            />
                            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Criscana Cadag</h4>
                            <p style={{ color: 'var(--blush-dark)', fontSize: '0.85rem', fontWeight: 600 }}>Founder & Creative Director</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                                A beauty enthusiast and entrepreneur from Manila, Chloe started GRWM Cosmetics
                                with a simple dream: to create makeup that actually works on Filipino skin tones.
                                With 5+ years in the beauty industry and a degree from FEU Tech, she combined
                                her passion for cosmetics and technology to build a platform that truly understands
                                its customers.
                            </p>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon">
                                    <i className="fab fa-tiktok"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <div
                className="p-5 text-center rounded-4"
                style={{ background: 'linear-gradient(135deg, var(--blush-light), var(--sand-light))', border: '1.5px solid var(--blush)' }}
            >
                <h3 className="section-heading">Ready to Start Your GRWM Routine?</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Discover hundreds of products made with love, just for you.</p>
                <Link to="/products" className="btn-hero text-decoration-none" style={{ display: 'inline-block' }}>
                    Shop Now <i className="fas fa-arrow-right ms-1"></i>
                </Link>
            </div>
        </div>
    );
};

export default About;