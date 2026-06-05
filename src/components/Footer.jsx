import "../styles/Footer.css";

const COPYRIGHT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer text-white">
      <div className="footer-inner">

        {/* Newsletter card */}
        <div className="newsletter-card d-flex flex-column flex-lg-row align-items-center justify-content-between">

          {/* Replace the existing div for the newsletter text with this: */}
<div className="text-start">
  <h3 className="newsletter-title mb-2">Stay Connected with Our Newsletter</h3>
  <p className="newsletter-subtitle mb-0">Subscribe for news, promos, and new services</p>
</div>

          <form className="newsletter-input-group d-flex align-items-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter email address"
              aria-label="Email address for newsletter"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Main footer grid */}
        <div className="row footer-main g-4 g-md-5 text-start">

          {/* Brand column */}
          <div className="col-md-6 d-flex flex-column align-items-start">
            <a className="navbar-brand brand m-0" href="#" onClick={(e) => e.preventDefault()}>
              <img src="/images/logo.png" alt="HomePro Logo" className="footer-logo" />
              HomePro
            </a>
            <br />
            <p className="footer-desc mb-4 mb-sm-5">
              Home Pro is your premier destination for top-notch smart home service and repair.
            </p>
            <div className="social-links d-flex flex-wrap">
              <a href="#youtube" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.25" stroke="currentColor" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#facebook" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#mail" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.25" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="col-md-6">
            <div className="row gx-4">
              <div className="col-6">
                <div className="footer-section">
                  <h4>Company</h4>
                  <ul>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#blog">Our Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="footer-section">
                  <h4>Legal</h4>
                  <ul>
                    <li><a href="#terms">Terms</a></li>
                    <li><a href="#privacy">Privacy</a></li>
                    <li><a href="#cookies">Cookies</a></li>
                    <li><a href="#license">License</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-divider d-none d-md-block" />
        <div className="footer-bottom">
          © {COPYRIGHT_YEAR} HomePro. All rights reserved.
        </div>

      </div>
    </footer>
  );
}