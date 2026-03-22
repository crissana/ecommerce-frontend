import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { RecentlyViewedContext } from '../context/RecentlyViewedContext';

const RecentlyViewed = () => {
    const { recentlyViewed, clearRecentlyViewed } = useContext(RecentlyViewedContext);
    const navigate = useNavigate();

    if (!recentlyViewed || recentlyViewed.length === 0) return null;

    return (
        <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h5 className="section-heading mb-0" style={{ fontSize: '1.2rem' }}>
                        <i className="fas fa-history me-2" style={{ color: 'var(--blush-dark)', fontSize: '1rem' }}></i>
                        Recently Viewed
                    </h5>
                </div>
                <button
                    onClick={clearRecentlyViewed}
                    className="btn-clear-filter"
                    style={{ width: 'auto', padding: '0.25rem 0.7rem', fontSize: '0.75rem' }}
                >
                    Clear
                </button>
            </div>
            <div className="recently-viewed-row">
                {recentlyViewed.map(product => (
                    <div
                        key={product.id}
                        className="recently-viewed-thumb"
                        onClick={() => navigate(`/product/${product.id}`)}
                        title={product.name}
                    >
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewed;
