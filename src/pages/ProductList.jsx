import { useState, useEffect, useRef, useCallback } from 'react';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import CompareBar from '../components/CompareBar';
import RecentlyViewed from '../components/RecentlyViewed';
import products from '../data/products';
import { useLocation } from 'react-router-dom';

const CATEGORIES = ['All', 'Lips', 'Eyes', 'Face', 'Skin', 'Brows', 'Blush'];
const RATINGS = [5, 4, 3, 2, 1];
const PAGE_SIZE = 8;

const ProductList = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initCategory = queryParams.get('category') || 'All';

    const [loading, setLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);
    const [displayCount, setDisplayCount] = useState(PAGE_SIZE);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(initCategory);
    const [priceRange, setPriceRange] = useState([0, 1500]);
    const [minRating, setMinRating] = useState(0);
    const [sortBy, setSortBy] = useState('default');
    const [compareList, setCompareList] = useState([]);
    const [isFetchingMore, setIsFetchingMore] = useState(false);

    const observerRef = useRef(null);
    const loadMoreRef = useRef(null);

    // Load products (simulate fetch)
    useEffect(() => {
        const timer = setTimeout(() => {
            setAllProducts(products);
            setLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    // Filter + sort products
    const filteredProducts = allProducts
        .filter(p => {
            const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
                || p.tags?.some(t => t.includes(searchQuery.toLowerCase()));
            const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
            const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
            const matchRating = p.rating >= minRating;
            return matchSearch && matchCategory && matchPrice && matchRating;
        })
        .sort((a, b) => {
            if (sortBy === 'price-asc') return a.price - b.price;
            if (sortBy === 'price-desc') return b.price - a.price;
            if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
            if (sortBy === 'rating-desc') return b.rating - a.rating;
            return 0; // default
        });

    const visibleProducts = filteredProducts.slice(0, displayCount);
    const hasMore = displayCount < filteredProducts.length;

    // Infinite scroll observer
    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isFetchingMore && !loading) {
            setIsFetchingMore(true);
            setTimeout(() => {
                setDisplayCount(prev => prev + PAGE_SIZE);
                setIsFetchingMore(false);
            }, 600);
        }
    }, [hasMore, isFetchingMore, loading]);

    useEffect(() => {
        const option = { root: null, rootMargin: '0px', threshold: 0.1 };
        observerRef.current = new IntersectionObserver(handleObserver, option);
        if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current);
        return () => { if (observerRef.current) observerRef.current.disconnect(); };
    }, [handleObserver]);

    // Reset display count when filters change
    useEffect(() => {
        setDisplayCount(PAGE_SIZE);
    }, [searchQuery, selectedCategory, priceRange, minRating, sortBy]);

    // Compare handlers
    const handleCompareToggle = (product) => {
        setCompareList(prev => {
            const exists = prev.find(p => p.id === product.id);
            if (exists) return prev.filter(p => p.id !== product.id);
            if (prev.length >= 3) return prev; // max 3
            return [...prev, product];
        });
    };

    const handleRemoveCompare = (id) => setCompareList(prev => prev.filter(p => p.id !== id));
    const handleClearCompare = () => setCompareList([]);

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('All');
        setPriceRange([0, 1500]);
        setMinRating(0);
        setSortBy('default');
    };

    return (
        <div className="container my-4">
            {/* Recently Viewed */}
            <RecentlyViewed />

            <div className="row g-4">
                {/* ===== FILTER SIDEBAR ===== */}
                <div className="col-lg-3 col-md-4">
                    <div className="filter-sidebar">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>
                                <i className="fas fa-sliders-h me-2" style={{ color: 'var(--blush-dark)' }}></i>
                                Filters
                            </h6>
                            <button className="btn-clear-filter" style={{ width: 'auto', padding: '0.2rem 0.6rem', fontSize: '0.75rem' }} onClick={clearFilters}>
                                Clear All
                            </button>
                        </div>

                        {/* Category */}
                        <div className="filter-section-title">Category</div>
                        {CATEGORIES.map(cat => (
                            <label key={cat} className="filter-check-label d-block">
                                <input
                                    type="radio"
                                    name="category"
                                    checked={selectedCategory === cat}
                                    onChange={() => setSelectedCategory(cat)}
                                />
                                {cat}
                            </label>
                        ))}

                        {/* Price Range */}
                        <div className="filter-section-title">Price Range</div>
                        <div>
                            <input
                                type="range"
                                min="0"
                                max="1500"
                                value={priceRange[1]}
                                onChange={e => setPriceRange([0, Number(e.target.value)])}
                                className="price-range-input"
                            />
                            <div className="d-flex justify-content-between mt-1" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                <span>₱0</span>
                                <span>₱{priceRange[1].toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="filter-section-title">Min. Rating</div>
                        {RATINGS.map(r => (
                            <label key={r} className="filter-check-label">
                                <input
                                    type="radio"
                                    name="rating"
                                    checked={minRating === r}
                                    onChange={() => setMinRating(r)}
                                />
                                <span className="star-rating" style={{ fontSize: '0.78rem' }}>
                                    {[...Array(r)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                </span>
                                <span style={{ fontSize: '0.78rem' }}>& above</span>
                            </label>
                        ))}
                        {minRating > 0 && (
                            <button
                                onClick={() => setMinRating(0)}
                                className="btn-clear-filter"
                                style={{ width: 'auto', fontSize: '0.72rem', padding: '0.2rem 0.5rem', marginTop: '0.4rem' }}
                            >
                                Clear Rating
                            </button>
                        )}
                    </div>
                </div>

                {/* ===== PRODUCT GRID ===== */}
                <div className="col-lg-9 col-md-8">
                    {/* Search & Sort Bar */}
                    <div className="search-sort-bar">
                        <i className="fas fa-search" style={{ color: 'var(--text-muted)' }}></i>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search by name, e.g. lipstick..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                        <select
                            className="sort-select"
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value)}
                        >
                            <option value="default">Sort: Default</option>
                            <option value="price-asc">Price: Low → High</option>
                            <option value="price-desc">Price: High → Low</option>
                            <option value="name-asc">Name: A → Z</option>
                            <option value="rating-desc">Top Rated</option>
                        </select>
                    </div>

                    {/* Result Count */}
                    {!loading && (
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                            Showing <strong style={{ color: 'var(--blush-dark)' }}>{visibleProducts.length}</strong> of {filteredProducts.length} products
                        </p>
                    )}

                    {/* Products Grid */}
                    <div className="row g-3">
                        {loading
                            ? Array(8).fill(0).map((_, i) => (
                                <div className="col-6 col-md-4 col-xl-3" key={i}>
                                    <SkeletonCard />
                                </div>
                            ))
                            : visibleProducts.length === 0
                                ? (
                                    <div className="col-12">
                                        <div className="empty-state">
                                            <i className="fas fa-search"></i>
                                            <h4>No products found</h4>
                                            <p>Try adjusting your search or filters</p>
                                            <button className="btn-primary-brand" onClick={clearFilters}>Clear Filters</button>
                                        </div>
                                    </div>
                                )
                                : visibleProducts.map(product => (
                                    <div className="col-6 col-md-4 col-xl-3" key={product.id}>
                                        <ProductCard
                                            product={product}
                                            compareList={compareList}
                                            onCompareToggle={handleCompareToggle}
                                        />
                                    </div>
                                ))
                        }
                    </div>

                    {/* Infinite Scroll Trigger */}
                    <div ref={loadMoreRef} className="load-more-trigger" style={{ marginBottom: compareList.length > 0 ? '6rem' : '0' }}>
                        {isFetchingMore && (
                            <>
                                <div className="spinner-ring" style={{ width: 24, height: 24, borderWidth: 2 }}></div>
                                <span>Loading more...</span>
                            </>
                        )}
                        {!isFetchingMore && !hasMore && !loading && filteredProducts.length > 0 && (
                            <span style={{ color: 'var(--text-muted)' }}>✓ All {filteredProducts.length} products loaded</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Compare Bar */}
            <CompareBar
                compareList={compareList}
                onRemove={handleRemoveCompare}
                onClearAll={handleClearCompare}
            />
        </div>
    );
};

export default ProductList;