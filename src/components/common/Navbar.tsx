"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";


const services = [
  { category: "services", id: "waste-management", name: "Waste Management" },
  { category: "services", id: "infrastructure", name: "Infrastructure Works" },
  { category: "services", id: "electrical", name: "Electrical Works" },
  { category: "services", id: "mechanical", name: "Mechanical Works" },
  { category: "services", id: "metal", name: "Metal Works" },
  { category: "services", id: "interior-exterior", name: "Interior & Exterior Finishes" },
];

const links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About Us" },
  { name: "Services", submenu: services },
  { href: "/projects", name: "Projects" },
  { href: "/community", name: "Community" },
  { href: "/careers", name: "Careers" },
  { href: "/contact", name: "Contact Us" },
];

export default function CustomNavbar() {
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const pathname = usePathname(); // Tracks the current route
 

  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand href="/" className="navbar-brand">
          <img loading="lazy" src="/assets/logo-07.png" width={50} height={50} className="navbar-logo" alt="Logo" />
        </Navbar.Brand>

        {/* Toggler */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links Section */}
          <Nav className="me-auto">
            {links.map((link) =>
              link.submenu ? (
                <div
                  className="nav-item dropdown-container"
                  key={link.name}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Nav.Link href="/services" className={`Nav-Link ${pathname.startsWith("/services") ? "active" : ""}`}>
                    {link.name}
                  </Nav.Link>
                  <div className={`dropdown-menu-custom ${isHovered ? "show" : ""}`}>
                    {link.submenu.map((sublink) => (
                      <Link key={sublink.id} href={`/${sublink.category}/${sublink.id}`} className="dropdown-item-custom">
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Nav.Link href={link.href} key={link.href} className={`Nav-Link ${pathname === link.href ? "active" : ""}`}>
                  {link.name}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
