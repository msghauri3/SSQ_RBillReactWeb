import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.icons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={styles.icon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={styles.icon} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={styles.icon} />
        </a>
      </div>
      <p style={styles.text}>© 2022, All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "20px 0",
    marginTop: "auto"
  },
  icons: {
    marginBottom: "10px",
  },
  icon: {
    margin: "0 10px",
    fontSize: "24px",
    color: "#fff",
    cursor: "pointer",
  },
  text: {
    fontSize: "14px",
    margin: 0,
  },
};

export default Footer;
