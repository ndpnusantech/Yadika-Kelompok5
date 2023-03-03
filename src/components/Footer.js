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
      className="text-center text-lg-start text-muted mt-5"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div style={{ margin: 'auto' }}>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
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
                />
                UnlimitedMovement
              </h6>
              <p></p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
              <p>
                <a href="#!" className="text-reset">
                  Order Now
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Login
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Register
                </a>
              </p>
              <p>
                <a href="/Faq" className="text-reset">
                  F A Q
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Testimoni Kami
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
