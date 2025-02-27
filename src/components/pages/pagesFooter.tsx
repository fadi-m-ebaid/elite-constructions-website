import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

export default function PagesFooter() {
  return (
    <section>
      <div className="category-image-2">
        <img src="/assets/servicesLanding-2.jpg" loading="lazy" />
      </div>
      <div className="pages-footer">
        <p className="pages-footer-desc">
          Whether you have a project in mind and you’re looking for a reliable
          construction partner or you’re looking to take the next step in your
          career, we want to hear from you.
        </p>
        <div className="contacting-buttons">
          <Link href={"/contact"}>
            <Button className="request-service-btn">Request Service</Button>
          </Link>
          <Link href={"/careers"}>
            <Button className="join-team-btn">Join Our Team</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
