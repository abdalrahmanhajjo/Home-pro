import "../styles/HowItWorks.css";

const HOW_IT_WORKS_STEPS = [
  {
    number: "1.",
    title: "Call us anytime 24/7",
    description:
      "You can contact us directly, we will quickly put you in touch with our home care professionals who are ready anytime",
  },
  {
    number: "2.",
    title: "Schedule Service",
    description:
      "After connecting your call, our home care experts will answer your questions and provide flexible appointment times",
  },
  {
    number: "3.",
    title: "Your request is completed",
    description:
      "Once your technician arrives, he will diagnose the problem and provide an estimate. If you decide to continue, the technician will get to work",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-inner">

        {/* Bootstrap row — stacks below xl, side-by-side at xl */}
        <div className="row g-0 align-items-xl-center">

          {/* ── Artwork column ─────────────────────────────────────── */}
          <div className="col-xl-5 how-artwork-outer">
            <div className="works-artwork-col">

              {/* Shaped background frame */}
              <div className="works-mask-frame">
                <img
                  src="/images/Bg@2x.png"
                  alt=""
                  aria-hidden="true"
                  className="works-bg-img"
                />
                {/* Verified badge — inside the frame (clipped by overflow:hidden) */}
                <div className="works-badge-wrap">
                  <img
                    src="/icons/Icon@2x.png"
                    alt="Verified badge"
                    className="works-badge-img"
                  />
                </div>
              </div>

              {/* Worker — absolutely positioned, overflows frame on the left */}
              <img
                src="/images/Worker.png"
                alt="HomePro professional worker"
                className="works-worker-overlay"
              />
            </div>
          </div>

          {/* ── Content column ─────────────────────────────────────── */}
          <div className="col-xl-7 how-content-outer">
            <div className="how-content">

              <h2 className="how-title">How HomePro works?</h2>

              <div className="how-steps">
                {HOW_IT_WORKS_STEPS.map((step) => (
                  <div key={step.number} className="how-step">

                    {/* Step number */}
                    <span className="step-number">{step.number}</span>

                    {/* Title + description — stacked on mobile, side-by-side from md */}
                    <div className="step-body">
                      <div className="row gx-3">
                        <div className="col-md-4">
                          <h3 className="step-title">{step.title}</h3>
                        </div>
                        <div className="col-md-8">
                          <p className="step-desc mb-0">{step.description}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
