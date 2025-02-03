import useDocumentTitle from "../hooks/useDocumentTitle";
import ContactForm from "../components/ContactForm";
import Footer from '../components/Footer';

function ContactPage() {
  useDocumentTitle("Contact");
  return (
    <div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;
