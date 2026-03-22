import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { RecentlyViewedContext } from '../context/RecentlyViewedContext';

const ProductCard = ({ product, compareList = [], onCompareToggle = null }) => {
    const { addToCart } = useContext(CartContext);
    const { toggleWishlist, isWishlisted } = useContext(WishlistContext);
    const { addRecentlyViewed } = useContext(RecentlyViewedContext);
    const navigate = useNavigate();

    const wishlisted = isWishlisted(product.id);
    const isInCompare = compareList.some(p => p.id === product.id);

    const handleCardClick = (e) => {
        // Don't navigate if clicking buttons/checkboxes
        if (e.target.closest('button') || e.target.closest('input') || e.target.closest('label')) return;
        addRecentlyViewed(product);
        navigate(`/product/${product.id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(product);
    };

    const handleWishlist = (e) => {
        e.stopPropagation();
        toggleWishlist(product);
    };

    const handleCompare = (e) => {
        e.stopPropagation();
        if (onCompareToggle) onCompareToggle(product);
    };

    const formatPrice = (value) =>
        Number(value).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <div className="product-card fade-in" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <div className="product-img-wrapper">
                {product.discount && (
                    <div className="sale-badge">-{product.discount}%</div>
                )}

                {/* Wishlist Heart */}
                <button
                    className={`wishlist-btn ${wishlisted ? 'wishlisted' : ''}`}
                    onClick={handleWishlist}
                    title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                    <i className={wishlisted ? 'fas fa-heart' : 'far fa-heart'}></i>
                </button>

                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />

                {/* Compare checkbox */}
                {onCompareToggle && (
                    <label className="compare-checkbox" onClick={handleCompare}>
                        <input
                            type="checkbox"
                            checked={isInCompare}
                            onChange={() => {}}
                            onClick={handleCompare}
                        />
                        Compare
                    </label>
                )}
            </div>

            <div className="product-card-body">
                <div className="product-category-tag">{product.category}</div>
                <h6 className="product-name">{product.name}</h6>

                {/* Star Rating */}
                <div className="star-rating mb-1">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className={i < product.rating ? 'fas fa-star' : 'far fa-star'}></i>
                    ))}
                </div>

                {/* Price */}
                <div className="product-price">
                    <span className="price-old">₱{formatPrice(product.oldPrice)}</span>
                    <span className="price-current">₱{formatPrice(product.price)}</span>
                </div>

                <button className="btn-add-cart" onClick={handleAddToCart}>
                    <i className="fas fa-shopping-bag"></i>
                    Add to Bag
                </button>
            </div>
        </div>
    );
};

export default ProductCard;