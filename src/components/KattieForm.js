import React from "react";

function KattieForm() {
  return (
    <div className="container mb-3">
      <div className="row justify-content-end">
        <div className="col-lg-4 border mb-3" id="newKattie">
          <h1 className="mt-3">
            Kattie Now!
            <span role="img" aria-label="emoji">
              🐱
            </span>
          </h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Kattie
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Select uploaded photo
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KattieForm;
