import useDocumentTitle from "../hooks/useDocumentTitle";

function AboutPage() {
  useDocumentTitle("About");
  return (
    <h1>
      We are all <i>about</i> this About Page.
    </h1>
  );
}

export default AboutPage;
