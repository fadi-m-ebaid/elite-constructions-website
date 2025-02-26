import React from "react";
import Link from "next/link";
import Map from "./Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="footer">
      <div className="info-section">
        <div className="navigators">
          <Link href="/contact">
            <button className="contact-button">Contact Us</button>
          </Link>
          {/* Social Media Icons */}
          <div className="social-media">
            <Link href="https://sa.linkedin.com/company/elitefuture" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </Link>
            <Link href="https://x.com/TheEliteWorks?mx=2" aria-label="Twitter">
              <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
            </Link>
            <Link href="https://www.facebook.com/the.elite.future" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </Link>
            <Link href="https://www.youtube.com/@theeliteworks" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </Link>
          </div>
          <div className="pages-links">
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            {/* <Link href="/products">Products</Link> */}
            <Link href="/community">Community</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="map">
          <Map dimensions={{ latitude: 21.374007, longitude: 39.874071 }} />
        </div>

        <div className="legal-links">
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
      </div>
      <div className="copy-right-section">
        <p className="copy-right">All rights reserved to Ad. Point 2025</p>
      </div>
    </section>
  );
}
