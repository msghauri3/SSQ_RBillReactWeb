import React, { useState } from "react";
import "./Contact.css"; // css import

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
      <div className="heading-container">
        <h2 className="contact-heading">Contact</h2>
        <div className="border-heading">
        </div>
        <p>
          Call Us at <strong>042 353416 23 24</strong>
        </p>
      </div>

      <div className="contact-row">
        {/* Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
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
        <div className="contact-info">
          <div className="info-contact">
            <div className="icon-contact">
              <i className="fa fa-home" aria-hidden="true"></i>
            </div>
            <span>Billing Office Alfalah Plaza Mohlanwal Site Lahore</span>
          </div>

          <div className="info-contact">
            <div className="icon-contact">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <span>042 353416 23 24</span>
          </div>

          <div className="info-contact">
            <div className="icon-contact">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <span>btlbilling@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
