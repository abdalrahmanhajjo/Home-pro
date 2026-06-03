import "../styles/Cta.css";

export default function Cta() {
  return (
    <section
      id="contact"
      className="cta-section text-white overflow-hidden position-relative"
    >
      <div className="cta-notch"></div>

      <img
        className="cta-image"
        src="/images/cta-worker-house.png"
        alt="HomePro technician with house"
      />

      <div className="container-xxl position-relative cta-content">
        <div className="row align-items-center">
          <div className="col-lg-7 position-relative z-2">
            <h2>
              Already to improve
              <br />
              or repair your home?
              <br />
              Let’s Talk!
            </h2>

            <div className="hero-checks cta-checks d-flex flex-wrap gap-4 gap-md-5 mt-4">
              <span>
                <i className="ic ic-check me-2"></i>
                Free Quotes
              </span>

              <span>
                <i className="ic ic-check me-2"></i>
                100% Commitment-Free
              </span>
            </div>

            <a className="btn btn-primary pill-button mt-4" href="#">
              Call Us Now
              <span>
                <i className="ic ic-phone"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}