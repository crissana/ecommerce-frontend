// Skeleton Card for loading state
const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton skeleton-img"></div>
            <div className="skeleton-body">
                <div className="skeleton skeleton-line short mb-2"></div>
                <div className="skeleton skeleton-line medium mb-2"></div>
                <div className="skeleton skeleton-line full mb-2"></div>
                <div className="skeleton skeleton-line short mb-2"></div>
                <div className="skeleton skeleton-btn"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
