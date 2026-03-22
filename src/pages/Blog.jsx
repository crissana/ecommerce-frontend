import Blog1 from '../assets/images/Blog1.webp';
import Blog2 from '../assets/images/Blog2.webp';
import Blog3 from '../assets/images/Blog3.webp';

const Blog = () => {
  return (
    <div className="container mt-4">
      <div className="row">
          <div className="col-md-9 mb-4">
            <h2>BLOGS</h2>
            <div className="row">
              <div className="col-md-12 mb-4">
                <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={Blog1} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Blog title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={Blog2} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Blog title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={Blog3} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div class="card-body">
                        <h5 className="card-title">Blog title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={Blog3} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Blog title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={Blog2} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Blog title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h3>Top Stories</h3>
            <div className="list-group mb-3">
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </a>
            </div>

            <h3 className="mb-3">Reviews</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Blog;