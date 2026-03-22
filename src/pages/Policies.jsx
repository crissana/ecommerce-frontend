const Policies = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark">Store Policies</h1>
        <p className="lead text-muted">Everything you need to know about shopping with GRWM Cosmetics.</p>
        <hr className="w-25 mx-auto border-danger border-2" />
      </div>
      <div className="row">
        <div className="col-lg-10">
          <div className="mb-4 p-3 border-start border-danger border-4 bg-light">
            <h4>Terms & Conditions</h4>
            <p>By using the GRWM Cosmetics store, you agree to our service terms. All content is protected by copyright.</p>
          </div>

          <div className="mb-4 p-3 border-start border-danger border-4 bg-light">
            <h4>Shipping Policy</h4>
            <p>We deliver nationwide within 3-5 business days. Tracking numbers are provided via email once shipped.</p>
          </div>

          <div className="mb-4 p-3 border-start border-danger border-4 bg-light">
            <h4>Return Policy</h4>
            <p>Cosmetics can be returned within 7 days if unopened and in original packaging due to hygiene reasons.</p>
          </div>

          <div className="mb-4 p-3 border-start border-danger border-4 bg-light">
            <h4>Privacy Policy</h4>
            <p>We value your privacy. Your data is only used to process orders and is never shared with third parties.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Policies;