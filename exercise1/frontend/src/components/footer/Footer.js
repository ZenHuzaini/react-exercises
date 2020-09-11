import React from "react";
const Footer = ({ story }) => {
  const {
    me: { name },
    location: { address, city, country },
  } = story;

  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">{address}</h4>
              <p className="lead mb-0">
                {city}, {country}
              </p>
            </div>
            {/* <!-- Footer Social Icons--> */}
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright © {name} 2020</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
