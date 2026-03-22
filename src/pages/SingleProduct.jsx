import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { RecentlyViewedContext } from '../context/RecentlyViewedContext';
import products from '../data/products';

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { toggleWishlist, isWishlisted } = useContext(WishlistContext);
    const { addRecentlyViewed } = useContext(RecentlyViewedContext);

    const product = products.find(p => p.id === Number(id));
    const wishlisted = product ? isWishlisted(product.id) : false;

    useEffect(() => {
        if (product) {
            addRecentlyViewed(product);
            window.scrollTo(0, 0);
        }
    }, [product?.id]);

    const formatPrice = (val) => Number(val).toLocaleString('en-PH', { minimumFractionDigits: 2 });

    if (!product) {
        return (
            <div className="container my-5 text-center">
                <div className="empty-state">
                    <i className="fas fa-box-open"></i>
                    <h4>Product not found</h4>
                    <p>The product you're looking for doesn't exist.</p>
                    <button className="btn-primary-brand" onClick={() => navigate('/products')}>
                        <i className="fas fa-arrow-left me-2"></i>Back to Shop
                    </button>
                </div>
            </div>
        );
    }

    // Related products (same category, exclude current)
    const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <div className="container my-4">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/products">Shop</Link></li>
                    <li className="breadcrumb-item"><Link to={`/products?category=${product.category}`}>{product.category}</Link></li>
                    <li className="breadcrumb-item active">{product.name}</li>
                </ol>
            </nav>

            {/* Product Detail */}
            <div className="row g-5 mb-5" style={{
                background: 'var(--bg-card)',
                border: '1.5px solid var(--border-color)',
                borderRadius: '20px',
                padding: '2rem',
            }}>
                {/* Image */}
                <div className="col-md-5">
                    <div style={{ position: 'relative' }}>
                        {product.discount && (
                            <div className="sale-badge" style={{ fontSize: '0.85rem', padding: '5px 14px' }}>
                                -{product.discount}% OFF
                            </div>
                        )}
                        <img src={product.image} alt={product.name} className="single-product-img" />
                    </div>
                </div>

                {/* Details */}
                <div className="col-md-7">
                    <div className="product-category-tag" style={{ fontSize: '0.8rem' }}>{product.category}</div>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        {product.name}
                    </h1>

                    {/* Stars */}
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <div className="star-rating">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className={i < product.rating ? 'fas fa-star' : 'far fa-star'}></i>
                            ))}
                        </div>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            ({product.rating}.0 rating)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <span className="price-old" style={{ fontSize: '1rem' }}>₱{formatPrice(product.oldPrice)}</span>
                        <span className="price-current" style={{ fontSize: '1.6rem', marginLeft: '0.5rem' }}>₱{formatPrice(product.price)}</span>
                        <span className="sale-badge" style={{ position: 'static', display: 'inline-block', marginLeft: '0.75rem', fontSize: '0.8rem' }}>
                            Save ₱{formatPrice(product.oldPrice - product.price)}
                        </span>
                    </div>

                    {/* Description */}
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                        {product.description}
                    </p>

                    {/* Tags */}
                    {product.tags && (
                        <div className="d-flex flex-wrap gap-2 mb-4">
                            {product.tags.map(tag => (
                                <span key={tag} style={{
                                    background: 'var(--blush-light)',
                                    color: 'var(--blush-dark)',
                                    borderRadius: '20px',
                                    padding: '3px 12px',
                                    fontSize: '0.78rem',
                                    fontWeight: 500
                                }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="d-flex gap-3 flex-wrap">
                        <button className="btn-add-cart" style={{ flex: 1, minWidth: 180, fontSize: '1rem', padding: '0.75rem' }} onClick={() => addToCart(product)}>
                            <i className="fas fa-shopping-bag me-2"></i>Add to Bag
                        </button>
                        <button
                            onClick={() => toggleWishlist(product)}
                            style={{
                                border: '2px solid var(--blush)',
                                background: wishlisted ? 'var(--blush-light)' : 'none',
                                color: wishlisted ? '#e05c6b' : 'var(--blush-dark)',
                                borderRadius: '10px',
                                padding: '0.75rem 1.2rem',
                                cursor: 'pointer',
                                transition: 'var(--transition)',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <i className={wishlisted ? 'fas fa-heart' : 'far fa-heart'}></i>
                            {wishlisted ? 'Wishlisted' : 'Wishlist'}
                        </button>
                    </div>

                    {/* Trust badges */}
                    <div className="d-flex flex-wrap gap-3 mt-4" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        <span><i className="fas fa-truck me-1" style={{ color: 'var(--blush-dark)' }}></i>Free shipping over ₱999</span>
                        <span><i className="fas fa-undo me-1" style={{ color: 'var(--blush-dark)' }}></i>30-day returns</span>
                        <span><i className="fas fa-shield-alt me-1" style={{ color: 'var(--blush-dark)' }}></i>Authentic guaranteed</span>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {related.length > 0 && (
                <section>
                    <h2 className="section-heading mb-1">You May Also Like</h2>
                    <div className="section-divider"></div>
                    <div className="row g-3">
                        {related.map(p => (
                            <div key={p.id} className="col-6 col-md-3">
                                {/* Import ProductCard dynamically to avoid circular deps */}
                                <div className="product-card fade-in" onClick={() => navigate(`/product/${p.id}`)} style={{ cursor: 'pointer' }}>
                                    <div className="product-img-wrapper">
                                        {p.discount && <div className="sale-badge">-{p.discount}%</div>}
                                        <img src={p.image} alt={p.name} className="product-image" />
                                    </div>
                                    <div className="product-card-body">
                                        <div className="product-category-tag">{p.category}</div>
                                        <h6 className="product-name">{p.name}</h6>
                                        <div className="star-rating">
                                            {[...Array(5)].map((_, i) => <i key={i} className={i < p.rating ? 'fas fa-star' : 'far fa-star'}></i>)}
                                        </div>
                                        <div className="product-price">
                                            <span className="price-old">₱{formatPrice(p.oldPrice)}</span>
                                            <span className="price-current">₱{formatPrice(p.price)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default SingleProduct;