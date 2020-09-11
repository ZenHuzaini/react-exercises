import React from "react";
const About = ({ story }) => {
  const {
    me: { name, occupation },
  } = story;

  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">{name}</p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">{occupation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
