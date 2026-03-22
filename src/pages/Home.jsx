import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import HeroBanner from '../components/HeroBanner';
import SkeletonCard from '../components/SkeletonCard';
import RecentlyViewed from '../components/RecentlyViewed';
import products from '../data/products';

import catLips  from '../assets/shopbycategory/Lips.webp';
import catEyes  from '../assets/shopbycategory/eyes.jpg';
import catFace  from '../assets/shopbycategory/Face.webp';
import catSkin  from '../assets/shopbycategory/skin.webp';
import catBrows from '../assets/shopbycategory/brows.webp';
import catBlush from '../assets/shopbycategory/blush.webp';

const CATEGORIES = [
    { name: 'Lips',  image: catLips,  color: '#FFB5BC' },
    { name: 'Eyes',  image: catEyes,  color: '#D9BB9B' },
    { name: 'Face',  image: catFace,  color: '#f4b942' },
    { name: 'Skin',  image: catSkin,  color: '#a8d8a8' },
    { name: 'Brows', image: catBrows, color: '#8b7355' },
    { name: 'Blush', image: catBlush, color: '#e8949b' },
];

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        // Simulate loading then use local data
        const timer = setTimeout(() => {
            const featured = [...products]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 4);
            setFeaturedProducts(featured);
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {/* Hero Carousel */}
            <HeroBanner />

            <div className="container">
                {/* Recently Viewed */}
                <RecentlyViewed />

                {/* Shop by Category */}
                <section className="mb-5">
                    <div className="d-flex justify-content-between align-items-end mb-1">
                        <h2 className="section-heading mb-0">Shop by Category</h2>
                        <Link to="/products" className="text-blush fw-semibold" style={{ fontSize: '0.875rem' }}>
                            View All <i className="fas fa-arrow-right ms-1"></i>
                        </Link>
                    </div>
                    <div className="section-divider"></div>

                    {/* Horizontal scroll row of tall portrait cards */}
                    <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollSnapType: 'x mandatory' }}>
                        {CATEGORIES.map(cat => (
                            <Link
                                key={cat.name}
                                to={`/products?category=${cat.name}`}
                                className="text-decoration-none"
                                style={{ flex: '0 0 auto', scrollSnapAlign: 'start' }}
                            >
                                <div style={{
                                    position: 'relative',
                                    width: 160,
                                    height: 240,
                                    borderRadius: 12,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                }}>
                                    {/* Full-bleed image */}
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.4s ease',
                                            display: 'block',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    {/* Dark gradient overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 50%)',
                                        borderRadius: 12,
                                    }} />
                                    {/* Category name — bottom left, italic */}
                                    <span style={{
                                        position: 'absolute',
                                        bottom: 14,
                                        left: 14,
                                        color: '#fff',
                                        fontFamily: 'var(--font-heading)',
                                        fontStyle: 'italic',
                                        fontSize: '1.1rem',
                                        fontWeight: 400,
                                        textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                                        letterSpacing: '0.3px',
                                    }}>
                                        {cat.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>


                {/* Featured Products */}
                <section className="mb-5">
                    <div className="d-flex justify-content-between align-items-end mb-1">
                        <div>
                            <h2 className="section-heading mb-0">Featured Products</h2>
                            <p className="section-subheading mt-1">Our top-rated picks, loved by thousands</p>
                        </div>
                        <Link to="/products" className="btn-outline-brand text-decoration-none" style={{ fontSize: '0.8rem', padding: '0.45rem 1.2rem' }}>
                            View All
                        </Link>
                    </div>
                    <div className="section-divider"></div>

                    <div className="row g-3">
                        {loading
                            ? Array(4).fill(0).map((_, i) => (
                                <div key={i} className="col-6 col-md-3">
                                    <SkeletonCard />
                                </div>
                            ))
                            : featuredProducts.map(product => (
                                <div key={product.id} className="col-6 col-md-3">
                                    <ProductCard product={product} />
                                </div>
                            ))
                        }
                    </div>
                </section>

                {/* Banner Strip */}
                <section className="mb-5">
                    <div
                        className="p-4 rounded-4 text-center"
                        style={{
                            background: 'linear-gradient(135deg, var(--blush-light), var(--sand-light))',
                            border: '1.5px solid var(--blush)',
                        }}
                    >
                        <h3 className="section-heading">✨ New Arrivals Every Week</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                            Stay glam — follow us on Instagram for first access to exclusive launches
                        </p>
                        <Link to="/products" className="btn-hero text-decoration-none" style={{ display: 'inline-block' }}>
                            Shop the Latest <i className="fas fa-arrow-right ms-1"></i>
                        </Link>
                    </div>
                </section>

                {/* All Products Preview */}
                <section className="mb-5">
                    <div className="d-flex justify-content-between align-items-end mb-1">
                        <div>
                            <h2 className="section-heading mb-0">All Products</h2>
                            <p className="section-subheading mt-1">Browse our full collection of {products.length} products</p>
                        </div>
                        <Link to="/products" className="text-blush fw-semibold" style={{ fontSize: '0.875rem' }}>
                            See All <i className="fas fa-arrow-right ms-1"></i>
                        </Link>
                    </div>
                    <div className="section-divider"></div>

                    <div className="row g-3">
                        {loading
                            ? Array(4).fill(0).map((_, i) => (
                                <div key={i} className="col-6 col-md-3">
                                    <SkeletonCard />
                                </div>
                            ))
                            : products.slice(4, 8).map(product => (
                                <div key={product.id} className="col-6 col-md-3">
                                    <ProductCard product={product} />
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;