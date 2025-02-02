import React from "react";
import "./ContactForm.css";
import Swal from "sweetalert2";
import ramcats_1 from "../img/ramcats_1.png";
import ramcats3 from "../img/ramcats3.png";



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
          confirmButtonCoeventor: '#130265',
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send message. Please try again.");
    }
  };

  
  return (
    <div className="page-container">
      <img src={ramcats_1} alt="Background pattern" className="background-pattern" />
      <div className="main-content-contact">
        <div className="contact-container">
          <div className="cat-container-contact">
            <img src={ramcats3} alt="Cat" className="cat-icon-contact" />
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
                Phone <span className="phone"></span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                
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
    </div>
  );
}

export default ContactForm;