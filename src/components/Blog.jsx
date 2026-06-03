import "../styles/Blog.css";

const posts = [
  { img: "/images/blog-smart.png", alt: "Smart home app", date: "19 Jan 2023", title: "Understanding Smart Home Systems & Maintenance" },
  { img: "/images/blog-roof.png", alt: "Roofers", date: "19 Jan 2023", title: "The Ultimate Guide to Home Repairs and Renovations" },
  { img: "/images/blog-paint.png", alt: "Paint cans", date: "19 Jan 2023", title: "Painting Techniques for a Kitchen Refresh" },
];

export default function Blog() {
  return (
    <section id="blog" className="section blog-section text-center">
      <div className="container-xxl">
        <h2 className="section-title mx-auto">Explore Insights in Our Blog</h2>
        <p className="section-text mx-auto mt-4">Find lots of insights and information on our blog. Explore, learn, and get inspired today.</p>

        <div className="row g-5 text-start blog-grid">
          {posts.map((p) => (
            <div className="col-lg-4" key={p.title}>
              <article className="blog-card">
                <img src={p.img} alt={p.alt} />
                <time>{p.date}</time>
                <h3>{p.title}</h3>
                <p>Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...</p>
                <div className="tags">
                  <span>Plumbing</span>
                  <span>Architecture</span>
                  <span className="tag-more">Maintenance</span>
                  <span className="tag-ellipsis">…</span>
                </div>
              </article>
            </div>
          ))}
        </div>

        <a className="view-more" href="#">View More <i className="ic ic-angle-right"></i></a>
      </div>
    </section>
  );
}
