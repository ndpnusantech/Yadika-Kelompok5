import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';
import Logo from './logo.png';

export default function Lower() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted"
    >
       <section className="d-flex justify-content-center justify-content-lg-between border-bottom pb-1 pt-2">
        <div style={{ margin: 'auto' }}>
          <a href="#!" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="#!" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="#!" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="whatsapp" />
          </a>
          <a href="#!" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className="mt-2 mb-1">
        <MDBContainer className="text-center text-md-start">
          <MDBRow className="mt-0">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" className="me-3" />
                <img
                  src={Logo}
                  style={{
                    widht: '35px',
                    height: '35px',
                    paddingRight: '5px',
                    paddingBottom: '5px',
                  }}
                  alt=""
                />
                UnlimitedMovement
              </h6>
              <p></p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
              <p>
                <a href="/CarItem" className="text-reset">
                  Order Now
                </a>
              </p>
              <p>
                <a href="/Login" className="text-reset">
                  Login
                </a>
              </p>
              <p>
                <a href="/RegisPage" className="text-reset">
                  Register
                </a>
              </p>
              <p>
                <a href="/Faq" className="text-reset">
                  F A Q
                </a>
              </p>
              <p>
                <a href="/Testimoni" className="text-reset">
                  Testimoni
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Jawa Barat, NY 10012, US
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                Um@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                123 345 567 789
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> +
                123 345 567 789
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
