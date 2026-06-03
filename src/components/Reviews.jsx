import { useState } from "react";
import "../styles/Reviews.css";

const TESTIMONIALS = [
  
  {
    text: "Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm.",
    author: "Kende Attila",
    rating: 4,
  },
  {
     text: "Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm.",
    author: "Kende Attila",
    rating: 4,
  },
  {
     text: "Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm.",
    author: "Kende Attila",
    rating: 4,
  },
  {
     text: "Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm.",
    author: "Kende Attila",
    rating: 4,
  },
  
];

const AVATARS = [
  "/images/profile1.png",
  "/images/profile1.png",
  "/images/profile1.png",
  "/images/profile1.png",
];

function StarRating({ rating, max = 5 }) {
  return (
    <div className="rev-stars d-flex align-items-center" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`rev-star ${i < rating ? "rev-star--on" : "rev-star--off"}`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

function NavButton({ direction, onClick, disabled, size = "desktop" }) {
  const isNext = direction === "next";
  const icon = isNext
    ? "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    : "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18";

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`rev-nav-btn rev-nav-btn--${size} ${disabled ? "rev-nav-btn--disabled" : "rev-nav-btn--active"}`}
      aria-label={isNext ? "Next review" : "Previous review"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="rev-nav-icon"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
    </button>
  );
}

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isFirst = activeIndex === 0;
  const isLast  = activeIndex === TESTIMONIALS.length - 1;
  const handlePrev = () => { if (!isFirst) setActiveIndex((i) => i - 1); };
  const handleNext = () => { if (!isLast)  setActiveIndex((i) => i + 1); };
  const active = TESTIMONIALS[activeIndex];

  return (
    <section className="rev-section">
      <div className="rev-inner d-flex flex-column align-items-center text-center">

        <h2 className="rev-heading">
          Here our original reviews from trusted platform
        </h2>

        {/* Trustpilot logo */}
        <div className="rev-logo-wrap">
          <img src="/images/trustpilot-logo.png" alt="Trustpilot" className="rev-logo" />
        </div>

        {/* Desktop gradient divider — hidden on mobile */}
        <div className="rev-divider d-none d-lg-block" />

        {/* Carousel row — desktop nav buttons sit at the sides of the text */}
        <div className="rev-carousel-row d-flex align-items-center justify-content-between w-100">
          <NavButton direction="prev" onClick={handlePrev} disabled={isFirst} size="desktop" />
          <div key={activeIndex} className="rev-text-wrap testimonial-fade mx-auto" aria-live="polite" aria-atomic="true">
            <p className="rev-text mb-0">{active.text}</p>
          </div>
          <NavButton direction="next" onClick={handleNext} disabled={isLast} size="desktop" />
        </div>

        {/* Author */}
        <div key={`author-${activeIndex}`} className="rev-author testimonial-fade d-flex align-items-center justify-content-center text-start">
          <div className="rev-avatar-wrap">
            <img src={AVATARS[activeIndex]} alt={active.author} className="rev-avatar" />
          </div>
          <div className="d-flex flex-column">
            <h4 className="rev-author-name mb-0">{active.author}</h4>
            <StarRating rating={active.rating} />
          </div>
        </div>

        {/* Dot pills — desktop only */}
        <div className="rev-dots d-none d-lg-flex align-items-center justify-content-center">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`rev-dot ${idx === activeIndex ? "rev-dot--active" : ""}`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

        {/* Mobile: [prev] [dots] [next] in one row — hidden on desktop */}
        <div className="rev-mobile-row d-flex d-lg-none align-items-center justify-content-center">
          <NavButton direction="prev" onClick={handlePrev} disabled={isFirst} size="mobile" />
          <div className="rev-dots-inline d-flex align-items-center">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`rev-dot ${idx === activeIndex ? "rev-dot--active" : ""}`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
          <NavButton direction="next" onClick={handleNext} disabled={isLast} size="mobile" />
        </div>

      </div>
    </section>
  );
}
