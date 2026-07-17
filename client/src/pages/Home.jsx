import Hero from "../components/home/Hero";
import FeatureCards from "../components/home/FeatureCards";
import Stats from "../components/home/Stats";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureCards />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;