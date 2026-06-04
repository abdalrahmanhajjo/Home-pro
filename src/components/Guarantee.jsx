import "../styles/Guarantee.css";

const benefits = [
  {
    icon: "ic-guarantee-filled",
    title: "Satisfaction Guarantee",
    text: "you don't need to worry about scams or our performance results. our company has been verified and strives for optimal results",
  },
  {
    icon: "ic-quotes",
    title: "Free Quotes",
    text: "Get personalized cost estimates without any obligation. Experience transparency and peace of mind as you explore our service.",
  },
  {
    icon: "ic-local",
    title: "Local Professionals",
    text: "Our services cover the Nationwide, US area, including urban, suburban, and rural locations for both long and short term maintenance",
  },
  {
    icon: "ic-24h",
    title: "Fast 24–Hour Service",
    text: "need fast handling for repairs to drains, leaks or something else? Our experts are available anytime to help you solve the problem",
  },
  {
    icon: "ic-calendar-filled",
    title: "Flexible Appointments",
    text: "We offer convenient appointment times that can accommodate your busy schedule, day or night, 7 days a week.",
  },
  {
    icon: "ic-commitment",
    title: "100% Commitment-Free",
    text: "You are free to ask us about the problems you are facing. We offer a no-commitment approach to put your mind at ease",
  },
];

export default function Guarantee() {
  return (
    <section className="guarantee-section">
      <div className="guarantee-box">
        <div className="row align-items-start border-bottom border-white border-opacity-10 pb-5 g-4">
          <div className="col-lg-6">
            <h2 className="section-title text-white">
              Fast, Friendly, and
              <br />
              Satisfaction Guarantee
            </h2>
          </div>

          <div className="col-lg-6">
            <p className="guarantee-intro">
              No matter how big or small your work is, whether it's for the
              interior or exterior of your home, we are ready to serve and help
              you solve your home problems.
            </p>
          </div>
        </div>

        <div className="row g-5 mt-4">
          {benefits.map((b) => (
            <div className="col-lg-6" key={b.title}>
              <div className="benefit">
                <span>
                  <i className={`ic ${b.icon}`}></i>
                </span>

                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}