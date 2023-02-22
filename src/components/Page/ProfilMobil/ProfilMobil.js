import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import { SwiperSlide } from 'swiper/react';
import { Button, Card } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';
import './cardSlider.css';

import { dataMobil } from '../../../data/dataMobil/dataAvanza';

import React, { Component } from 'react';

export default class ProfilMobil extends Component {
  render() {
    return (
      <>
        <NavScroll />
        <div className="profile">
          {dataMobil.map((data) => {
            return (
              <SwiperSlide id={data.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={data.Img} />
                  <Card.Body>
                    <Card.Title>{data.Nama}</Card.Title>
                    <Button variant="dark">Rent Now</Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            );
          })}
        </div>
        <Lower />
      </>
    );
  }
}
