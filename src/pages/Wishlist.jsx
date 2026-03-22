import { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="section-heading mb-0">My Wishlist</h1>
                    <p className="section-subheading mt-1" style={{ marginBottom: 0 }}>
                        {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
                    </p>
                </div>
            </div>
            <div className="section-divider"></div>

            {wishlist.length === 0 ? (
                <div className="empty-state">
                    <i className="far fa-heart"></i>
                    <h4>Your wishlist is empty</h4>
                    <p>Save products you love by clicking the heart icon on any product card.</p>
                    <Link to="/products" className="btn-primary-brand text-decoration-none" style={{ display: 'inline-block' }}>
                        <i className="fas fa-store me-2"></i>Browse Products
                    </Link>
                </div>
            ) : (
                <div className="row g-3">
                    {wishlist.map(product => (
                        <div key={product.id} className="col-6 col-md-4 col-lg-3">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
