import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Card } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../components/css/cardSlider.css';

export default function CardSlide() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        style={{ wight: '80%', height: '450px' }}
      >
        <SwiperSlide>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="dark">Rent Now </Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="dark">Rent Now </Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="dark">Rent Now </Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="dark">Rent Now </Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="dark">Rent Now </Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="dark">Rent Now </Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="dark">Rent Now </Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="dark">Rent Now </Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="dark">Rent Now </Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
