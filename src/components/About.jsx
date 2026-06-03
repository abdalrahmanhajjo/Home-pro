import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container-xxl">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <h2 className="section-title">Professional for your home<br />services</h2>
            <p className="section-text mt-4">
              You need help for home care? We are home care professionals focused in the US region. We provide several services that support home services
            </p>

            <div className="row g-4 check-list mt-5">
              <div className="col-sm-6"><i className="ic ic-check"></i>Repair and Installation</div>
              <div className="col-sm-6"><i className="ic ic-check"></i>Maintenance</div>
              <div className="col-sm-6"><i className="ic ic-check"></i>Home Security Services</div>
              <div className="col-sm-6"><i className="ic ic-check"></i>Plumbing</div>
              <div className="col-sm-6"><i className="ic ic-check"></i>Budget-friendly</div>
              <div className="col-sm-6"><i className="ic ic-check"></i>Eco-friendly solutions</div>
            </div>

            <div className="contact-alert mt-5">
              We already 24 hours fast services to help you. You can contact us at{" "}
              <a href="tel:8886175894">(888) 617–5894</a>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="roof-shape ms-lg-auto">
              <img src="/images/roof-workers.png" alt="Roof technicians working" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
