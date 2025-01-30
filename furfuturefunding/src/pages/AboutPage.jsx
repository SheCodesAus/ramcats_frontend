import useDocumentTitle from "../hooks/useDocumentTitle";
import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";

function AboutPage() {
  useDocumentTitle("About");
  return (
    <h1>
      <AboutUs />
      <HeroSection />
    </h1>
  );
}

export default AboutPage;
