import useDocumentTitle from "../hooks/useDocumentTitle";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  useDocumentTitle("Contact");
  return <ContactForm />;
}

export default ContactPage;
