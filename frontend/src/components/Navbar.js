import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import React from 'react';
import '../components/css/navbar.css';
import LogoRent from './logo.png';

function NavScroll() {
  return (
    <Navbar fixed="top" className="Navbarr" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img alt="" src={LogoRent} style={{ wight: '50px', height: '50px',marginLeft:'80px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav className="justify-content-end nav mt-1" style={{marginRight:'50px'}} activeKey="/home">
          <Nav.Item>
            <Nav.Link
              className="hove font"
              href="/"
              style={{ color: 'black', fontSize: '20px' }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/CarItem"
              className="hove font"
              eventKey="link-3"
              style={{ color: 'black', fontSize: '20px' }}
            >
              Daftar Mobil
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="hove font"
              eventKey="link-2"
              style={{ color: 'black', fontSize: '20px' }}
              href="/SyrtKntuan"
            >
              Syarat & Ketentuan
            </Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Dropdown>
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                <i
                  className="fas fa-user-circle"
                  style={{ fontSize: '36px' }}
                ></i>
              </Dropdown.Toggle>

              <Dropdown.Menu
              className='editUserDropdown'
              >
                <Dropdown.Item href="/RegisPage">Register</Dropdown.Item>
                <Dropdown.Item href="/Login">Login</Dropdown.Item>
                <Dropdown.Item href="/editUser">Edit User</Dropdown.Item>
                <Dropdown.Item href="/history">History</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
