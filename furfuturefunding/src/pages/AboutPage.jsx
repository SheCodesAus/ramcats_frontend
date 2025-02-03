import useDocumentTitle from "../hooks/useDocumentTitle";
import AboutUs from "../components/AboutUs";
import Footer from '../components/Footer';

function AboutPage() {
  useDocumentTitle("About");
  return (
    
  <div>
    <AboutUs />
    <Footer />
  </div>
  );
}

export default AboutPage;
