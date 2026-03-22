import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Compare = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const compareList = location.state?.compareList || [];

    const formatPrice = (val) => Number(val).toLocaleString('en-PH', { minimumFractionDigits: 2 });

    if (compareList.length < 2) {
        return (
            <div className="container my-5">
                <div className="empty-state">
                    <i className="fas fa-balance-scale"></i>
                    <h4>No Products to Compare</h4>
                    <p>Select 2–3 products from the shop to compare side-by-side.</p>
                    <Link to="/products" className="btn-primary-brand text-decoration-none" style={{ display: 'inline-block' }}>
                        <i className="fas fa-store me-2"></i>Go to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const rows = [
        { label: 'Image', key: 'image', type: 'image' },
        { label: 'Name', key: 'name' },
        { label: 'Category', key: 'category' },
        { label: 'Price', key: 'price', type: 'price' },
        { label: 'Old Price', key: 'oldPrice', type: 'price' },
        { label: 'Rating', key: 'rating', type: 'stars' },
        { label: 'Discount', key: 'discount', type: 'discount' },
        { label: 'Description', key: 'description' },
    ];

    return (
        <div className="container my-4">
            <div className="d-flex align-items-center gap-3 mb-4">
                <button
                    onClick={() => navigate(-1)}
                    style={{ background: 'none', border: 'none', color: 'var(--blush-dark)', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}
                >
                    <i className="fas fa-arrow-left me-2"></i>Back
                </button>
                <h1 className="section-heading mb-0">Product Comparison</h1>
            </div>
            <div className="section-divider"></div>

            <div className="table-responsive">
                <table className="table compare-table" style={{ minWidth: compareList.length * 220 + 150 }}>
                    <thead>
                        <tr>
                            <th style={{ width: 140 }}>Feature</th>
                            {compareList.map(p => (
                                <th key={p.id} className="text-center">{p.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr key={row.key}>
                                <td className="fw-semibold" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                    {row.label}
                                </td>
                                {compareList.map(p => (
                                    <td key={p.id} className="text-center align-middle" style={{ padding: '1rem' }}>
                                        {row.type === 'image' && (
                                            <img
                                                src={p[row.key]}
                                                alt={p.name}
                                                style={{ width: '100%', maxWidth: 160, maxHeight: 160, objectFit: 'cover', borderRadius: 12 }}
                                            />
                                        )}
                                        {row.type === 'price' && (
                                            <span className="price-current" style={{ fontSize: '1rem' }}>₱{formatPrice(p[row.key])}</span>
                                        )}
                                        {row.type === 'discount' && (
                                            <span className="sale-badge" style={{ position: 'static', display: 'inline-block' }}>
                                                -{p[row.key]}%
                                            </span>
                                        )}
                                        {row.type === 'stars' && (
                                            <div className="star-rating justify-content-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className={i < p[row.key] ? 'fas fa-star' : 'far fa-star'}></i>
                                                ))}
                                            </div>
                                        )}
                                        {!row.type && (
                                            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{p[row.key]}</span>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {/* Add to Cart row */}
                        <tr>
                            <td className="fw-semibold" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Action</td>
                            {compareList.map(p => (
                                <td key={p.id} className="text-center" style={{ padding: '1rem' }}>
                                    <button className="btn-add-cart" style={{ fontSize: '0.85rem' }} onClick={() => addToCart(p)}>
                                        <i className="fas fa-shopping-bag"></i> Add to Bag
                                    </button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Compare;
