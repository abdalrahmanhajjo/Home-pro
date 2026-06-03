import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Guarantee from "./components/Guarantee.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Reviews from "./components/Reviews.jsx";
import Blog from "./components/Blog.jsx";
import Faq from "./components/Faq.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Services />
        <Guarantee />
        <HowItWorks />
        <Reviews />
        <Blog />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
