import useDocumentTitle from "../hooks/useDocumentTitle";
import AboutUs from "../components/AboutUs";
import Footer from '../components/Footer';

function AboutPage() {
  useDocumentTitle("About");
  return (
    <h1>
      <AboutUs />
      
    </h1>
  );
}

export default AboutPage;
