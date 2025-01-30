import React from "react";
import "./ContactForm.css";
import Swal from "sweetalert2";

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "20e856df-0da3-4b3c-8e72-cd8cb7d2270a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message was sent successfully!",
          icon: "success",
          confirmButtonColor: '#130265',
          timer: 3000,
          customClass: {
            popup: 'my-custom-popup-class',
            confirmButton: 'my-custom-button-class'
          }
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.message || 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#130265',
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-cat-container">
          <img src="src/assets/ramcats3.png" alt="Cat Mascot" className="contact-cat-icon" />
        </div>
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                Given Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">
                Last Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                Phone <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="preferredContact">Preferred Contact Method</label>
            <select id="preferredContact" name="preferredContact">
              <option value="">Select preferred contact method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="both">Either</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
          {result && <span className="result-message">{result}</span>}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;