import { useState } from "react";
import "../style/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "", // 'success' or 'error'
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, subject, message } = formData;

    if (!fullName || !email || !subject || !message) {
      setStatus({
        type: "error",
        text: "Please fill out all fields.",
      });
      return;
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({
      type: "success",
      text: "Thank you! Your message has been received.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contactSection" id="contact">
      <div className="contactContainer">
        <p className="sectionTag">Get In Touch</p>
        <h2>Get In Touch</h2>
        <p className="contactIntro">
          Ready to start a conversation? I'd love to hear from you. Let's discuss how we can work together.
        </p>

        <div className="contactGrid">
          {/* Contact Information Column */}
          <div className="contactInfoColumn">
            {/* Phone */}
            <div className="contactInfoCard">
              <div className="contactIcon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contactDetails">
                <h3>Phone</h3>
                <p>
                  <a href="tel:8925428378">8925428378</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="contactInfoCard">
              <div className="contactIcon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contactDetails">
                <h3>Email Address</h3>
                <p>
                  <a href="mailto:s.saikumar2780@gmail.com">
                    s.saikumar2780@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="contactInfoCard">
              <div className="contactIcon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contactDetails">
                <h3>Location</h3>
                <p>Kanyakumari</p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contactFormCard">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="fullName" className="formLabel">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="formInput"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="email" className="formLabel">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="formInput"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="subject" className="formLabel">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="formInput"
                  placeholder="Project inquiry, collaboration, etc."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="message" className="formLabel">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="formTextarea"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submitBtn">
                Send Message
              </button>

              {status.text && (
                <div
                  className={
                    status.type === "success"
                      ? "successMessage"
                      : "errorMessage"
                  }
                >
                  {status.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
