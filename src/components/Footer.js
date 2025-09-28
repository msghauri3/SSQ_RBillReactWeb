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
      <p style={styles.text}>© 2025, All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "60px 0",  // 👈 height barha di (20px → 30px)
    // position: "fixed",  // 👈 hamesha fix bottom pe
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1000,
  },
  icons: {
    marginBottom: "12px",
  },
  icon: {
    margin: "0 12px",
    fontSize: "26px", // 👈 icons bhi thore barhe kar diye
    color: "#fff",
    cursor: "pointer",
  },
  text: {
    fontSize: "15px",
    margin: 0,
  },
};

export default Footer;
