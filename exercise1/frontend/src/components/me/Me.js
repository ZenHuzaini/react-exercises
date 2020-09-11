import React, { useState, useEffect } from "react";

const Me = ({ story, updateStory }) => {
  const {
    me: { name, occupation },
  } = story;

  const update = (event) => {
    const inputname = event.target.value;
    updateStory({ ...story, me: { name: inputname, occupation } });
  };

  const updateOccupation = (event) => {
    const newOccupation = event.target.value;
    updateStory({ ...story, me: { name, occupation: newOccupation } });
  };

  const clearComponent = () => {};

  const form = (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          onChange={update}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Job</label>
        <input
          onChange={updateOccupation}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
    </form>
  );

  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img
          className="masthead-avatar mb-5"
          src="assets/img/avataaars.svg"
          alt=""
        />

        <h1 className="masthead-heading text-uppercase mb-0">{name}</h1>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <p className="masthead-subheading font-weight-light mb-0">
          {occupation}
        </p>
        <hr />
        {form}
      </div>
    </header>
  );
};

export default Me;
