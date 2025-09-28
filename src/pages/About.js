import React from "react";
import "./About.css"; // 👈 yahan apna custom CSS likh lena

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="heading-section">
          <h2>ABOUT US</h2>
          <p>
            Bahria Town has been shaping landscapes and lives in Pakistan since
            the company’s inception in 1996. Not just about building homes,
            Bahria Town develops value-added, master-planned communities housing
            thousands of families who are enjoying a complete living experience.
            Upon completion, the under-development projects in Karachi,
            Islamabad, Rawalpindi, Lahore and Nawabshah will accommodate more
            than a million residents. Bahria Town’s 35,000 employees are
            delivering iconic developments, driving leadership, pioneering
            innovation and creating a legacy for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
