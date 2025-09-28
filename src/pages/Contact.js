import React, { useState } from "react";
import "./Contact.css"; // Custom CSS

const Contact = () => {
  const [message, setMessage] = useState("");
  const maxCount = 1000;

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message sent successfully!");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="heading-section text-center">
          <h2>Contact</h2>
          <div className="border-heading">
            <i className="fa fa-bicycle" aria-hidden="true"></i>
          </div>
          <p>
            Call Us at <strong>042 353416 23 24</strong>
          </p>
        </div>

        <div className="row contact-row">
          {/* Form */}
          <div className="col-md-6 col-sm-12">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea
                placeholder="Message"
                rows="5"
                maxLength={maxCount}
                value={message}
                onChange={handleChange}
                required
              />
              <div className="char-count">
                {message.length} / {maxCount}
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Info */}
          <div className="col-md-6 col-sm-12 contact-info">
            <div className="info-box">
              <i className="fa fa-home"></i>
              <p>Billing Office Alfalah Plaza Mohlanwal Site Lahore</p>
            </div>
            <div className="info-box">
              <i className="fa fa-mobile"></i>
              <p>+04 23 534 162 3-24</p>
            </div>
            <div className="info-box">
              <i className="fa fa-envelope"></i>
              <p>btlbilling@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
