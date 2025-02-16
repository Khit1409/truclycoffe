export default function Review() {
  return (
    <>
      {/* Start review Area */}
      <section className="review-area section-gap" id="review">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-60 col-lg-10">
              <div className="title text-center">
                <h1 className="mb-10">What kind of Coffee we serve for you</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 single-review">
              <img src="img/r1.png" alt="" />
              <div className="title d-flex flex-row">
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
              </div>
              <p>
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker. Here you can
                find the best computer accessory for your laptop, monitor,
                printer, scanner, speaker.
              </p>
            </div>
          </div>
          <div className="row counter-row">
            <div className="col-lg-3 col-md-6 single-counter">
              <h1 className="counter">2536</h1>
              <p>Happy Client</p>
            </div>
            <div className="col-lg-3 col-md-6 single-counter">
              <h1 className="counter">7562</h1>
              <p>Total Projects</p>
            </div>
            <div className="col-lg-3 col-md-6 single-counter">
              <h1 className="counter">2013</h1>
              <p>Cups Coffee</p>
            </div>
            <div className="col-lg-3 col-md-6 single-counter">
              <h1 className="counter">10536</h1>
              <p>Total Submitted</p>
            </div>
          </div>
        </div>
      </section>
      {/* End review Area */}
    </>
  );
}
