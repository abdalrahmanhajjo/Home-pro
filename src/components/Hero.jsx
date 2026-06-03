import Navbar from "./Navbar.jsx";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <header className="hero text-white overflow-hidden">
      <Navbar />

      <div className="hero-stage position-relative mx-auto">
        <img className="hero-image hero-image-left" src="/images/hero-left.png" alt="Technician repairing a door lock" />
        <img className="hero-image hero-image-right" src="/images/hero-right.png" alt="Technician repairing a toilet" />

        <div className="container hero-content text-center position-relative z-2">
          <p className="hero-subtitle fw-bold text-white-50">
            Maintenances <span>•</span> Repairs <span>•</span> Improvements
          </p>

          <h1 className="hero-title fw-bold mx-auto">
            Need improvement<br />or repair your home?<br />we can help!
          </h1>

          <div className="hero-checks d-flex flex-wrap justify-content-center">
            <span><i className="ic ic-check me-2"></i>Free Quotes</span>
            <span><i className="ic ic-check me-2"></i>100% Commitment-Free</span>
          </div>

          <a className="btn btn-primary pill-button" href="#contact">
            Call Us Now
            <span><i className="ic ic-phone"></i></span>
          </a>
        </div>
        <br />

        <div className="hero-features position-relative z-2 mx-auto">
          <div className="mini-feature">
            <span><i className="ic ic-guarantee"></i></span>
            <strong>Satisfaction<br />Guarantee</strong>
          </div>
          <div className="mini-feature">
            <span><i className="ic ic-clock"></i></span>
            <strong>24H<br />Availability</strong>
          </div>
          <div className="mini-feature">
            <span><i className="ic ic-pin"></i></span>
            <strong>Local US<br />Professional</strong>
          </div>
          <div className="mini-feature">
            <span><i className="ic ic-calendar"></i></span>
            <strong>Flexible<br />Appointments</strong>
          </div>
        </div>
      </div>

      <div className="hero-notch"></div>
    </header>
  );
}
