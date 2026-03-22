import banner from '../assets/images/banner.webp';
import banner1 from '../assets/images/banner1.webp';
import banner2 from '../assets/images/banner2.webp';
import { Link } from 'react-router-dom';

const slides = [
    {
        image: banner,
        title: "Your Glow, Your Rules",
        subtitle: "Discover our bestselling lip tints, palettes & more",
        cta: "Shop Now",
        link: "/products"
    },
    {
        image: banner1,
        title: "Get Ready With Me",
        subtitle: "Premium makeup essentials for every skin tone",
        cta: "Explore Collection",
        link: "/products"
    },
    {
        image: banner2,
        title: "Skincare Meets Glamour",
        subtitle: "Nourishing formulas that love your skin as much as you do",
        cta: "View Skincare",
        link: "/products"
    }
];

const HeroBanner = () => {
    return (
        <div className="hero-carousel">
            <div
                id="heroBannerCarousel"
                className="carousel carousel-fade slide"
                data-bs-ride="carousel"
                data-bs-interval="4000"
            >
                {/* Indicators */}
                <div className="carousel-indicators">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            data-bs-target="#heroBannerCarousel"
                            data-bs-slide-to={i}
                            className={i === 0 ? 'active' : ''}
                            aria-current={i === 0 ? 'true' : undefined}
                            aria-label={`Slide ${i + 1}`}
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: 'var(--blush)'
                            }}
                        />
                    ))}
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    {slides.map((slide, i) => (
                        <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                            <img src={slide.image} alt={slide.title} />
                            <div className="carousel-caption hero-caption text-start">
                                <h2>{slide.title}</h2>
                                <p>{slide.subtitle}</p>
                                <Link to={slide.link} className="btn-hero">
                                    {slide.cta} <i className="fas fa-arrow-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#heroBannerCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#heroBannerCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroBanner;
