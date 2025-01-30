import React from "react";
import "./ContactForm.css";
// import Swal from "sweetalert2";

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending...."); Need to figure out how to get this to disappear once async finished
    const formData = new FormData(event.target);

    formData.append("access_key", "20e856df-0da3-4b3c-8e72-cd8cb7d2270a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Hooray!",
        text: "Your message was sent successfully!",
        icon: "success",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <form class="contact-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="emaiil">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject: </label>
        <input type="text" id="subject" placeholder="Subject line" />
      </div>
      <div>
        <label htmlFor="message">Message: </label>
        <textarea
          id="message"
          placeholder="Enter your message"
          name="message"
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
      <span>{result}</span>
    </form>
  );
}

export default ContactForm;
