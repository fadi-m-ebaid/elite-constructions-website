import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import Link from "next/link";
import Aos from "aos";

const ContactPage = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
    }, []);

  return (
    <div className="contact-section" data-aos="fade-in">
      {/* Left Section: Contact Details */}
      <div className="contact-details">
        <h5 className="section-title">Get in touch</h5>
        <h2 className="contact-heading">We’d Love To Hear From You.</h2>
        <p className="contact-description">
          We are here to answer any questions you may have. Do not hesitate to
          contact us about any inquiries you may have.
        </p>

        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <strong>Address:</strong>
            <Link className="contanct-link"
              href="https://www.google.com/maps/search/?api=1&query=Makkah,+An+Nasim+District,+Tilal+Village+Al+Raghi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Makkah, An Nasim District, Tilal Village Al Raghi
            </Link>
          </p>

          <p>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <strong>Address:</strong>
            <Link className="contanct-link"
              href="https://www.google.com/maps/search/?api=1&query=Cairo+-+The+5th+Settlement"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cairo - The 5th Settlement
            </Link>
          </p>

          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <strong>Email:</strong>
            <Link className="contanct-link" href="mailto:Info@Theeliteworks.Com">
              Info@Theeliteworks.Com
            </Link>
          </p>

          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <strong>Phone:</strong>
            <Link className="contanct-link" href="tel:0542565430">0542565430</Link>
          </p>
        </div>
      </div>
      {/* Right Section: Contact Form */}
      <div className="contact-form-container">
        <h3 className="form-title">Send A Message</h3>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Full Name" required />
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
