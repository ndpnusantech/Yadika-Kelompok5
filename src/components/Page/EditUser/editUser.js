import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import Logo from './logo.png';
import './editUser.css';

function OffcanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          style={{ height: '70px', paddingLeft: '50px', paddingBottom: '20px' }}
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
          <Button className="edit-picture-button">Edit</Button>
        </div>
        <div className="profile-info">
          <h3 id="nameProfil">Name</h3>
          <p id="emailProfile">Email</p>
          <p id="noProfile">No telp</p>
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
              style={{ height: '70px', width: '70px' }}
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
      <div className="editProfileButton">
        <p>Ganti Nama Anda</p>
        <p>Ganti No Telp Anda</p>
        <p>Save</p>
      </div>
    </>
  );
}

export default OffcanvasExample;
