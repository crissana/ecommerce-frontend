// Header is now just an announcement bar
const Header = () => {
    return (
        <div className="announcement-bar">
            <i className="fas fa-sparkles me-2"></i>
            Free Shipping on Orders Over ₱999 &nbsp;·&nbsp;
            <strong>Use code: GRWM10</strong> for 10% off your first order!
            <i className="fas fa-sparkles ms-2"></i>
        </div>
    );
};

export default Header;