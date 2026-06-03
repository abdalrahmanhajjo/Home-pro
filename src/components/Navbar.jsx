import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock body scroll while the mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="navbar navbar-dark site-navbar">
        <div className="container-xxl nav-shell">
          <a className="navbar-brand brand" href="#">
            <img src="/images/logo.png" alt="HomePro logo" className="brand-logo" />
            HomePro
          </a>

          <div className="desktop-nav d-none d-md-flex align-items-center flex-grow-1">
            <ul className="navbar-nav mx-auto flex-row gap-md-4 gap-xl-5 fw-bold">
              <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#blog">Our Blog</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>

            <div className="service-status fw-bold">
              <span></span>
              24 Hour Services
            </div>
          </div>

          <button
            className="mobile-menu-btn d-md-none"
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <i className="ic ic-menu"></i>
          </button>
        </div>
      </nav>

      {open && <div className="offcanvas-backdrop fade show" onClick={close} />}

      <div className={`offcanvas offcanvas-end mobile-sidebar${open ? " show" : ""}`} tabIndex="-1">
        <div className="offcanvas-header">
          <a className="navbar-brand brand m-0" href="#" onClick={close}>
            <img src="/images/logo.png" alt="HomePro logo" className="brand-logo" />
            HomePro
          </a>

          <button type="button" className="mobile-close" aria-label="Close" onClick={close}>
            <i className="ic ic-close"></i>
          </button>
        </div>

        <div className="offcanvas-body">
          <ul className="mobile-nav-list">
            <li><a href="#about" onClick={close}>About Us</a></li>
            <li><a href="#services" onClick={close}>Services</a></li>
            <li><a href="#blog" onClick={close}>Our Blog</a></li>
            <li><a href="#contact" onClick={close}>Contact</a></li>
          </ul>

          <div className="mobile-service-status">
            <span></span>
            24 Hour Services
          </div>
        </div>
      </div>
    </>
  );
}
