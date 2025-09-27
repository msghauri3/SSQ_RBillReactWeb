import React from "react";
import "./Projects.css"; // 👈 is file me styling daal dena

const Projects = () => {
  return (
    <section id="projects" className="portfolio parent-container">
      <div className="container">
        <div className="heading-section">
          <span>Bahria Town Projects</span>
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
          <div className="row">
            {/* 1st row */}
            <div className="top20">
              {[
                { img: "/Content/assets/image/portfolio/1.jpg", title: "Bahria Eiffel Tower" },
                { img: "/Content/assets/image/portfolio/16.png", title: "Bahria Talwar Chowk" },
                { img: "/Content/assets/image/portfolio/14.png", title: "Bahria Mart" },
                { img: "/Content/assets/image/portfolio/13.png", title: "Bahria Town Mosque" },
              ].map((item, index) => (
                <div key={index} className="col-md-3 col-sm-6 col-xs-12">
                  <div className="image-portfolio">
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
                </div>
              ))}
            </div>

            <div className="clear"></div>

            {/* 2nd row */}
            <div className="center-div">
              {[
                { img: "/Content/assets/image/portfolio/5.png", title: "Grand Jamia Masjid" },
                { img: "/Content/assets/image/portfolio/6.png", title: "Overseas Enclaves" },
                { img: "/Content/assets/image/portfolio/12.png", title: "Bahria Orchard Lahore" },
              ].map((item, index) => (
                <div key={index} className="col-md-3 col-sm-6 col-xs-12">
                  <div className="image-portfolio">
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
                </div>
              ))}
            </div>

            <div className="clear"></div>

            {/* 3rd row */}
            <div className="top-section">
              {[
                { img: "/Content/assets/image/portfolio/9.png", title: "Ahram E Misr" },
                { img: "/Content/assets/image/portfolio/18.png", title: "Bahria Meadows Villas" },
                { img: "/Content/assets/image/portfolio/10.png", title: "OVERSEAS Commercial" },
                { img: "/Content/assets/image/portfolio/17.JPG", title: "Bahria Town Safari Villas" },
              ].map((item, index) => (
                <div key={index} className="col-md-3 col-sm-6 col-xs-12">
                  <div className="image-portfolio">
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
                </div>
              ))}
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
