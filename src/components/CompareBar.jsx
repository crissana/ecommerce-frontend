import { Link } from 'react-router-dom';

const CompareBar = ({ compareList, onRemove, onClearAll }) => {
    if (!compareList || compareList.length === 0) return null;

    return (
        <div className="compare-bar">
            <div className="d-flex align-items-center gap-2 flex-wrap" style={{ flex: 1 }}>
                <span className="fw-semibold" style={{ color: 'var(--text-primary)', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>
                    <i className="fas fa-balance-scale me-2" style={{ color: 'var(--blush-dark)' }}></i>
                    Compare ({compareList.length}/3):
                </span>

                {compareList.map(product => (
                    <div key={product.id} className="d-flex align-items-center gap-1">
                        <img src={product.image} alt={product.name} className="compare-product-thumb" />
                        <button
                            onClick={() => onRemove(product.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-muted)',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                padding: '0 4px',
                                lineHeight: 1
                            }}
                            title="Remove"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                ))}

                {compareList.length < 3 && (
                    <div style={{
                        width: 48, height: 48,
                        border: '2px dashed var(--border-color)',
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem'
                    }}>
                        +
                    </div>
                )}
            </div>

            <div className="d-flex gap-2 align-items-center">
                <button className="btn-clear-compare" onClick={onClearAll}>
                    Clear All
                </button>
                {compareList.length >= 2 && (
                    <Link
                        to="/compare"
                        state={{ compareList }}
                        className="btn-compare-now text-decoration-none"
                    >
                        <i className="fas fa-columns me-1"></i>
                        Compare Now
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CompareBar;
