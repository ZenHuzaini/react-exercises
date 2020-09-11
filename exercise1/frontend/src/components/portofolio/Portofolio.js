import React from "react";

const Portofolio = ({ story, updateStory }) => {
  const { portofolio } = story;
  let dataInformation;
  let labelInformation;

  const portofolioData = (content, key) => {
    return (
      <a
        className="list-group-item list-group-item-action"
        id="list-home-list"
        data-toggle="list"
        href={`#${content}`}
        role="tab"
        aria-controls="home"
        key={key}
      >
        {content}
      </a>
    );
  };

  const textDataLabel = (e) => {
    labelInformation = e.target.value;
  };

  const textDataInfromation = (e) => {
    dataInformation = e.target.value;
  };

  const saveData = (e) => {
    e.preventDefault();
    const addNewPortofolio = portofolio;
    addNewPortofolio.push({
      label: labelInformation,
      information: dataInformation,
    });
    updateStory({ ...story, portofolio: addNewPortofolio });
  };

  const deleteData = (e) => {
    e.preventDefault();
    let newPortofolio = portofolio;
    newPortofolio.splice(e.target.value, 1);
    updateStory({ ...story, portofolio: newPortofolio });
  };

  const updateData = (e) => {
    e.preventDefault();
    let wiser = portofolio;
    wiser.splice(e.target.value, 1, {
      label: labelInformation,
      information: dataInformation,
    });

    updateStory({ ...story, portofolio: wiser });
  };

  const detailPortofolio = (data, key) => {
    return (
      <div
        className="tab-pane fade show "
        id={data.label}
        role="tabpanel"
        aria-labelledby="list-home-list"
        key={key}
      >
        {data.information}

        <br />
        <hr />

        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Label</label>
            <input
              onChange={textDataLabel}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder={data.label}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Description</label>
            <input
              onChange={textDataInfromation}
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder={data.information}
            />
          </div>
          <button
            value={key}
            onClick={updateData}
            type="button"
            className="btn btn-warning btn-sm"
          >
            Update
          </button>
        </form>

        <br />
        <hr />

        <button
          value={key}
          onClick={deleteData}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  };

  const form = (
    <form>
      <div className="form-row">
        <div className="col">
          <input
            onChange={textDataLabel}
            type="text"
            className="form-control"
            placeholder="label"
          />
        </div>
        <div className="col">
          <input
            onChange={textDataInfromation}
            type="text"
            className="form-control"
            placeholder="infromation"
          />
        </div>
        <div className="col">
          <button onClick={saveData} type="submit" className="btn btn-primary">
            save!
          </button>
        </div>
      </div>
    </form>
  );

  const portofolioDatas = portofolio.map((data, index) => {
    return portofolioData(data.label, index);
  });

  const detailPortofolioDatas = portofolio.map(
    ({ information, label }, index) => {
      return detailPortofolio({ information, label }, index);
    }
  );

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <br />
        {form}
        <hr />

        <div className="row">
          <div className="col-4">
            <div className="list-group" id="list-tab" role="tablist">
              {portofolio.length === 0 ? <h6>no data</h6> : portofolioDatas}
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="nav-tabContent">
              {detailPortofolioDatas}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
