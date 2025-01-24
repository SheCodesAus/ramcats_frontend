import "./ContactForm.css";

function ContactForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div>
        <label htmlFor="emaiil">Email: </label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="subject">Subject: </label>
        <input type="text" id="subject" placeholder="Subject line" />
      </div>
      <div>
        <label htmlFor="message">Message: </label>
        <textarea id="message" placeholder="Enter your message"></textarea>
      </div>
    </form>
  );
}

export default ContactForm;
