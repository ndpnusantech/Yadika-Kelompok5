import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Card } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../components/css/cardSlider.css';
import { data } from '../data/dataCard';

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
        style={{ width: '80%', height: '450px' }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.Img} />
              <Card.Body>
                <Card.Title>{item.Nama}</Card.Title>
                <Button variant="dark">Rent Now </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
