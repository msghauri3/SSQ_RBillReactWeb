// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer
      className="text-white pt-4 mt-5"
      style={{
        backgroundColor: "rgb(47, 60, 126)",
        fontSize: "0.9rem",
        fontFamily: "'Segoe UI', 'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Contact 1 */}
          <div className="col-12 col-md-6 col-lg-3 footer-section">
            <h6 className="fw-semibold mb-2 text-uppercase" style={{ letterSpacing: "0.5px" }}>
              Contact Us (Bahria Enclave)
            </h6>
            <p className="mb-1">Billing Office 1st Floor Head Office</p>
            <p className="mb-1">Sector I, Bahria Enclave</p>
            <p className="mb-1">📞 +92 (51) 2721035</p>
            <p className="mb-0">
              ✉{" "}
              <a
                href="mailto:be.billingdepartment@gmail.com"
                className="text-white text-decoration-none"
              >
                be.billingdepartment@gmail.com
              </a>
            </p>
          </div>

          {/* Contact 2 */}
          <div className="col-12 col-md-6 col-lg-3 footer-section">
            <h6 className="fw-semibold mb-2 text-uppercase" style={{ letterSpacing: "0.5px" }}>
              Contact Us (Phase 1 to 6)
            </h6>
            <p className="mb-1">Garden Avenue, Near Civic Center, Phase 4</p>
            <p className="mb-1">📞 +92 (51) 5733277</p>
            <p className="mb-0">
              ✉{" "}
              <a href="mailto:cbdbt1to6@gmail.com" className="text-white text-decoration-none">
                cbdbt1to6@gmail.com
              </a>
            </p>
          </div>

          {/* Contact 3 */}
          <div className="col-12 col-md-6 col-lg-3 footer-section">
            <h6 className="fw-semibold mb-2 text-uppercase" style={{ letterSpacing: "0.5px" }}>
              Contact Us (Phase 7 to 8)
            </h6>
            <p className="mb-1">Usman Block, Near Grid Station, Phase 8</p>
            <p className="mb-1">📞 +92 (51) 5410387 &amp; 5410080</p>
            <p className="mb-0">
              ✉{" "}
              <a href="mailto:Cbdbt7to9@gmail.com" className="text-white text-decoration-none">
                Cbdbt7to9@gmail.com
              </a>
            </p>
          </div>

          {/* Corporate Offices */}
          <div className="col-12 col-md-6 col-lg-3 footer-section">
            <h6 className="fw-semibold mb-2 text-uppercase" style={{ letterSpacing: "0.5px" }}>
              Corporate Offices
            </h6>
            <p className="mb-1 d-flex align-items-start">
              <img
                src="https://ext.same-assets.com/1557206989/2563901416.svg"
                height="14"
                width="14"
                alt=""
                className="me-2 mt-1"
              />
              Corporate Office-I, Park Rd, Bahria Town Phase II Rawalpindi
            </p>
            <p className="mb-0 d-flex align-items-start">
              <img
                src="https://ext.same-assets.com/1557206989/548389142.svg"
                height="14"
                width="14"
                alt=""
                className="me-2 mt-1"
              />
              Corporate Office-II, Park Rd, Bahria Town Phase II Rawalpindi
            </p>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        <div className="text-center pb-3" style={{ fontSize: "0.85rem" }}>
          © 2025 Copyright:&nbsp;
          <a
            href="/"
            className="text-white text-decoration-none fw-semibold"
            style={{ letterSpacing: "0.3px" }}
          >
            Bahria Town
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
