import React from "react";
import "./Projects.css"; // 👈 is file me styling daal dena

const Projects = () => {
  return (
    <section id="projects" className="portfolio parent-container">
      <div className="container">
        <div className="heading-section">
          <h2>Bahria Town Projects</h2>
          <div className="border-heading">
            <i className="fa fa-bicycle" aria-hidden="true"></i>
          </div>
          <p>
            Bahria Town Karachi defines a brighter future. It is undoubtedly ‘a
            city within a city’ which has delivered a-list of conveniences, the
            best amenities and a world-class infrastructure.
          </p>
        </div>

        <div className="photos-portfolio">

  {/* 1st row → 4 images */}
  <div className="row">
    {[
      { img: "/projects/Bahria Eiffel Tower.jpg", title: "Bahria Eiffel Tower" },
      { img: "/projects/Bahria Talwar Chowk.png", title: "Bahria Talwar Chowk" },
      { img: "/projects/Bahria Mart.png", title: "Bahria Mart" },
      { img: "/projects/Bahria Town Mosque.png", title: "Bahria Town Mosque" },
    ].map((item, index) => (
      <div key={index} className="image-portfolio">
        <a href={item.img}>
          <img src={item.img} alt={item.title} />
          <div className="overlay-image-portfolio">
            <div className="info-overlay-portfolio">
              <h4>{item.title}</h4>
              <div className="border-overlay"></div>
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>

  {/* 2nd row → 3 images (centered) */}
  <div className="row center-row">
    {[
      { img: "/projects/Grand Jamia Masjid.png", title: "Grand Jamia Masjid" },
      { img: "/projects/Overseas Enclaves.png", title: "Overseas Enclaves" },
      { img: "/projects/Bahria Orchard Lahore.png", title: "Bahria Orchard Lahore" },
    ].map((item, index) => (
      <div key={index} className="image-portfolio">
        <a href={item.img}>
          <img src={item.img} alt={item.title} />
          <div className="overlay-image-portfolio">
            <div className="info-overlay-portfolio">
              <h4>{item.title}</h4>
              <div className="border-overlay"></div>
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>

  {/* 3rd row → 4 images */}
  <div className="row">
    {[
      { img: "/projects/Ahram E Misr.png", title: "Ahram E Misr" },
      { img: "/projects/Bahria Meadows Villas.png", title: "Bahria Meadows Villas" },
      { img: "/projects/OVERSEAS Commercial.png", title: "OVERSEAS Commercial" },
      { img: "/projects/Bahria Town Safari Villas.jpg", title: "Bahria Town Safari Villas" },
    ].map((item, index) => (
      <div key={index} className="image-portfolio">
        <a href={item.img}>
          <img src={item.img} alt={item.title} />
          <div className="overlay-image-portfolio">
            <div className="info-overlay-portfolio">
              <h4>{item.title}</h4>
              <div className="border-overlay"></div>
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>

</div>


        
      </div>
    </section>
  );
};

export default Projects;
