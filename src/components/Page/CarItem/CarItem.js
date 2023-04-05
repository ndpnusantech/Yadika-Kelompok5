import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './carItem.css';
import { carData } from '../../../data/dataMobil';
import NavScroll from '../../Navbar';
import Lower from '../../Footer';

const CarItem = () => {
  return (
    <>
      <NavScroll />
      <Container fluid className="car-items-container">
        <Row>
          {carData.map((item, index) => {
            const { img, model, carName, automatic, speed, price } = item;

            return (
              <Col lg="4" md="4" sm="6" className="mb-5" key={index}>
                <div className="car-item">
                  <div className="car-img">
                    <img src={img} alt="" className="w-100" />
                  </div>

                  <div className="car-item-content mt-4">
                    <h4 className="section-title text-center">{carName}</h4>
                    <h6 className="rent-price text-center mt-">
                      {' '}
                      Rp.{price}
                      <span>/ Hari</span>
                    </h6>

                    <div className="car-item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                      <span className="d-flex align-items-center gap-1">
                        <i class="ri-car-line"></i>
                        {model}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <i class="ri-settings-2-line"></i>
                        {automatic}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <i class="ri-timer-flash-line"></i>
                        {speed}
                      </span>
                    </div>

                    <button className="w-50 car-item-btn car-btn-rent">
                      <Link to="/ProfilMobil">Details</Link>
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Lower />
    </>
  );
};

export default CarItem;
