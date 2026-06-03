import { useState } from "react";
import "../styles/Faq.css";

const FAQ_ITEMS = [
  {
    question: "What is HomePro?",
    answer:
      "HomePro is a home care platform that connects homeowners with professional service providers offering a wide range of home services, including repairs, maintenance, cleaning, and more.",
  },
  {
    question: "Are the service providers on HomePro reliable and qualified?",
    answer:
      "Yes, all service providers on HomePro undergo a strict background check, credential verification, and vetting process to ensure they meet our high quality and safety standards.",
  },
  {
    question: "What if I have an issue or complaint about a service provider?",
    answer:
      "Our customer support team is available 24/7 to resolve any disputes. If a service provider does not fulfill your request satisfactorily, we offer support guarantees to rectify the job.",
  },
  {
    question: "How are payments handled on HomePro?",
    answer:
      "Payments are processed securely through our platform. You can pay via credit/debit cards or linked accounts only after the technician completes the requested service to your satisfaction.",
  },
  {
    question: "How do I leave a review for a service provider?",
    answer:
      "Once your service request is closed, you will receive an automated prompt in your client portal and via email to rate your professional and leave a detailed public review.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <div className="row g-0 align-items-start">

          {/* Left: sticky heading */}
          <div className="col-lg-5 faq-heading-col text-center text-lg-start">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-help mb-0">
              Still need help?{" "}
              <a href="#contact" className="faq-help-link">Get Help Now</a>
            </p>
          </div>

          {/* Right: custom accordion */}
          <div className="col-lg-7 faq-content-col">
            <div className="faq-list d-flex flex-column">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className={`faq-item ${isOpen ? "faq-item--open" : "faq-item--closed"}`}
                  >
                    <button
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="faq-btn d-flex align-items-center justify-content-between w-100 text-start"
                    >
                      <span className={`faq-question ${isOpen ? "faq-question--open" : ""}`}>
                        {faq.question}
                      </span>
                      <span className={`faq-chevron ${isOpen ? "faq-chevron--open" : ""}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>

                    {/* CSS grid trick — smooth height animation with no JS */}
                    <div className={`faq-answer ${isOpen ? "faq-answer--open" : "faq-answer--closed"}`}>
                      <div className="faq-answer-inner">
                        <p className="faq-answer-text mb-0">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
