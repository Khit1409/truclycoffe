export default function Footer() {
  return (
    <>
      <footer className="footer-area section-gap text-white rounded">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>
                <p className="footer-text">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
            <div className="col-lg-5  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className="" id="mc_embed_signup">
                  <form className="form-inline">
                    <input
                      className="form-control"
                      placeholder="Insert your email"
                    />
                    <button className="btn btn-success btn-footer my-2">
                      <i className="fa-solid fa-long-arrow-alt-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <a href="https://www.facebook.com/TrucLyCoffee?locale=vi_VN">
                    <i className="fa-brands fa-facebook mx-2" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter mx-2" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-dribbble mx-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
