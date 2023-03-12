import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import "./editUser.css";

function OffcanvasExample() {
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("+62 123 234 345");

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
        <Container>
          <span className="edit-profile-text">Edit Profile</span>
          <Nav className="justify-content-end" style={{ fontSize: "18px" }}>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">log Out</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
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

        <div className="profile-info mb-4">
          <h3 id="nameProfil">{name}</h3>
          <p id="emailProfile">JohnDoe@gmail.com</p>
          <p id="passwordProfile">********</p>
          <p id="noProfile">{phone}</p>
        </div>
      </div>
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
