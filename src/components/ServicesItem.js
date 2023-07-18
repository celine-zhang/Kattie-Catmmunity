import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ServicesItem() {
  const [showBathModal, setShowBathModal] = useState(false);
  const [selectedBathDate, setSelectedBathDate] = useState(null);

  const [showBoardModal, setShowBoardModal] = useState(false);
  const [selectedBoardDate, setSelectedBoardDate] = useState(null);

  const handleBathModalOpen = () => {
    setShowBathModal(true);
  };

  const handleBathModalClose = () => {
    setShowBathModal(false);
  };

  const handleBathDateChange = (date) => {
    setSelectedBathDate(date);
  };

  const handleBoardModalOpen = () => {
    setShowBoardModal(true);
  };

  const handleBoardModalClose = () => {
    setShowBoardModal(false);
  };

  const handleBoardDateChange = (date) => {
    setSelectedBoardDate(date);
  };

  return (
    <div className="card-group m-5">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1547565527-389ccd19e85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Ultimate Cat Bathing Service</h5>
          <p className="card-text">
            Our team of skilled professionals will pamper your feline companion
            with gentle care and meticulous attention to detail. From soothing
            warm water baths to specially formulated shampoos that nourish their
            fur, we ensure a spa-like experience for your beloved cat.
          </p>
          <p className="card-text">
            <Button variant="primary" onClick={handleBathModalOpen}>
              Book Bath Service
            </Button>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1591324535489-9c78376631dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Professional Cat Boarding</h5>
          <p className="card-text">
            At our professional cat boarding facility, we understand that
            leaving your beloved cat behind can be a difficult decision. That's
            why we offer a premium cat boarding service that ensures your furry
            friend receives the most comfortable living experience while you're
            on your journey or focused on your work.
          </p>
          <p className="card-text">
            <Button variant="primary" onClick={handleBoardModalOpen}>
              Check the Slots
            </Button>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1615332591802-dddd86b35238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">MeowMart</h5>
          <p className="card-text">
            Welcome to MeowMart, your ultimate one-stop shop for all your cat's
            essential needs. At MeowMart, we understand that your feline
            companion deserves the very best, and that's why we offer a wide
            range of high-quality products specifically curated for cats.
          </p>
          <p className="card-text">
            <Button variant="primary" href="/">
              Go to MeowMart
            </Button>
          </p>
        </div>
      </div>

      <Modal show={showBathModal} onHide={handleBathModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Bath Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select a date for your cat's bath:</p>
          <DatePicker
            selected={selectedBathDate}
            onChange={handleBathDateChange}
            dateFormat="MMMM d, yyyy"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBathModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBathModalClose}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showBoardModal} onHide={handleBoardModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Bath Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select a date to start your cat's boarding service:</p>
          <DatePicker
            selected={selectedBoardDate}
            onChange={handleBoardDateChange}
            dateFormat="MMMM d, yyyy"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBoardModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBoardModalClose}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ServicesItem;
