import React, { useState } from "react";
import "./ContactFormStyle.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requests, setRequests] = useState([]);
  const [requestDetail, setRequestDetail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRequestChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setRequests(selectedOptions);
  };

  const handleRequestDetailChange = (event) => {
    setRequestDetail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Execute submission logic, such as sending form data to the backend
    console.log("Submitted:", {
      name,
      email,
      requests,
      requestDetail
    });
    // Clear form fields
    setName("");
    setEmail("");
    setRequests([]);
    setRequestDetail("");
  };

  return (
    <div className="container col-5 shadow p-3 mt-5 mb-5 bg-white rounded">
      <form onSubmit={handleSubmit} className="m-3 contactForm">
        <h1>Contact Form</h1>
        <div className="row mb-3">
          <label htmlFor="name" className="col-form-label col-sm-2">
            Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-form-label col-sm-2">
            Email:
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="requests" className="col-form-label col-sm-2">
            Request Type:
          </label>
          <div className="col-sm-10">
            <select
              multiple
              className="form-select"
              id="requests"
              value={requests}
              onChange={handleRequestChange}
              required
            >
              <option value="catmmunity">Catmmunity</option>
              <option value="services">Services</option>
              <option value="account">Account</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="requestDetail" className="col-form-label col-sm-2">
            Request Detail:
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="requestDetail"
              value={requestDetail}
              onChange={handleRequestDetailChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
