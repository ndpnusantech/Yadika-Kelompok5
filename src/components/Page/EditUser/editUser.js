import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Logo from "./logo.png";
import "./editUser.css";

function OffcanvasExample() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("+62 123 234 345");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const [imageURL, setImageURL] = useState("");

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const imageURL = URL.createObjectURL(image);
    setImageURL(imageURL);
  };

  return (
    <>
      <Navbar bg="light">
        <Container fluid>
          <Button
            variant="light"
            onClick={handleShow}
            className="sidebar-button"
          >
            <div className="sidebar-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Button>
          <Nav className="me-auto">
            <Nav.Link href="/" className="edit-profile-link">
              <span className="edit-profile-text">Edit Profile</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="sidebar">
        <img
          src={Logo}
          alt="Logo"
          style={{ height: "70px", paddingLeft: "50px", paddingBottom: "20px" }}
        />
        <Nav className="flex-column nav-center">
          <Nav.Link href="/" className="home-link">
            <FontAwesomeIcon icon={faHome} />
            <span className="home-text">Home</span>
          </Nav.Link>
          <Nav.Link href="/" className="logout-link">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="logout-text">Logout</span>
          </Nav.Link>
        </Nav>
      </div>
      <div className="profile-container">
        <div className="profile-image">
          {imageURL ? (
            <img
              src={imageURL}
              alt="Profile"
              height="190"
              width="190"
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <div
              className="profile-image"
              style={{ borderRadius: "50%" }}
            ></div>
          )}
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            capture="user"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="profile-picture" className="edit-picture-button">
            <i className="fa fa-camera fa-4x"></i>
          </label>
        </div>

        <div className="profile-info">
          <h3 id="nameProfil">{name}</h3>
          <p id="emailProfile">JohnDoe@gmail.com</p>
          <p id="noProfile">{phone}</p>
        </div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        aria-labelledby="offcanvasNavbar"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              className="logoEditProfile"
              src={Logo}
              alt="Logo"
              style={{ height: "70px", width: "70px" }}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" className="home-link">
              <FontAwesomeIcon icon={faHome} />
              <span className="home-text">Home</span>
            </Nav.Link>
            <Nav.Link href="/" className="logout-link">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span className="logout-text">Logout</span>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="edit-profile-container">
        <form>
          <div className="form-group">
            <input
              placeholder="Edit Name"
              type="text"
              className="form-control"
              id="nameInput"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Phone Number"
              type="text"
              className="form-control"
              id="phoneInput"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: "5px" }}
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
export default OffcanvasExample;
