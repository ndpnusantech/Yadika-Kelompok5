import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import Logo from './logo.png';
import React from 'react';
import '../components/css/navbar.css';

function NavScroll() {
  return (
    <Navbar
      fixed="top"
      className="Navbarr "
      style={{ backgroundColor: '#E5E5E5' }}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} style={{ wight: '40px', height: '40px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav className="justify-content-end nav" activeKey="/home">
          <Nav.Item>
            <Nav.Link
              className="hove"
              href="/"
              style={{ color: 'black', fontSize: '20px' }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/ProfilMobil"
              className="hove"
              eventKey="RegisPage"
              style={{ color: 'black', fontSize: '20px' }}
            >
              Rent Now
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="hove"
              eventKey="link-2"
              style={{ color: 'black', fontSize: '20px' }}
              href="/SyrtKntuan"
            >
              Syarat & Ketentuan
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Dropdown style={{ marginRight: '35px' }}>
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                <i
                  className="fas fa-user-circle"
                  style={{ fontSize: '36px' }}
                ></i>
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ transform: 'translateX(-50px)', width: '50px' }}
              >
                <Dropdown.Item href="/RegisPage">Register</Dropdown.Item>
                <Dropdown.Item href="/#">Login</Dropdown.Item>
                <Dropdown.Item href="/editUser">Edit User</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
