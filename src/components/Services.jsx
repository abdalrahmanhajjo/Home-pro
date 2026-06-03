import "../styles/Services.css";

const services = [
  { icon: "ic-repair", title: "Plumbing services", text: "Drain pipe leaking, pipe clogged, replace the pipe line" },
  { icon: "ic-roof", title: "Roofing repair", text: "Roof leaks, tile replacement, roof cleaning and maintenance" },
  { icon: "ic-wall", title: "Mold Removal", text: "Removing and cleaning mildew, Restoration and Prevention" },
  { icon: "ic-wood", title: "Tree Trimming", text: "Trimming and cleaning, Deadwood removal, Tree shaping" },
  { icon: "ic-plumbing", title: "Appliance Repair", text: "repair of washing machines, refrigerators, Air conditioner, etc" },
  { icon: "ic-bathroom", title: "Bathroom Remodeling", text: "Design and Consulting, installation, Repairing, tile repair" },
  { icon: "ic-door", title: "Locksmith", text: "Lock Installation and Repair, Duplication, Lock Rekeying" },
];

export default function Services() {
  return (
    <section id="services" className="section services-section text-center">
      <div className="container-xxl">
        <h2 className="section-title text-center mx-auto">Our Services</h2>
        <p className="section-text mx-auto mt-4">
          You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, you need our help!
        </p>

        <div className="row g-5 text-start service-grid">
          {services.map((s) => (
            <div className="col-12 col-md-6 col-lg-3" key={s.title}>
              <article className="service-card">
                <span><i className={`ic ${s.icon}`}></i></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            </div>
          ))}

          <div className="col-12 col-md-6 col-lg-3">
            <article className="more-card">
              <h3>More service?</h3>
              <p>You can tell us what you need and we can help!</p>
              <a href="#contact">Call Us Now</a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
