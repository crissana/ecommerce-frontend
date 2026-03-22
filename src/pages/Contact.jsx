const Contact = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark">Get In Touch</h1>
        <p className="lead text-muted">Have questions about our shades or formulas? We're here to help!</p>
        <hr className="w-25 mx-auto border-danger border-2" />
      </div>

      <div className="row g-5">
        <div className="col-lg-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="mb-4">Send us a Message</h3>
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email Address</label>
                <input type="email" className="form-control" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Subject</label>
                <select className="form-select">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Shade Matching Help</option>
                  <option>Returns & Exchanges</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea className="form-control" rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button className="btn btn-dark w-100 py-2">
                <i className="fas fa-paper-plane me-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="mb-4">
            <h3 className="mb-4">Contact Information</h3>
            <div className="d-flex mb-3">
              <i className="fas fa-map-marker-alt text-danger me-3 mt-1"></i>
              <p>FEU Tech, P. Paredes St, Sampaloc, Manila, Metro Manila</p>
            </div>
            <div className="d-flex mb-3">
              <i className="fas fa-phone text-danger me-3 mt-1"></i>
              <p>+63 912 345 6789</p>
            </div>
            <div className="d-flex mb-3">
              <i className="fas fa-envelope text-danger me-3 mt-1"></i>
              <p>support@grwmcosmetics.ph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;