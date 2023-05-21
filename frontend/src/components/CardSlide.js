import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Card } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';
import '../components/css/cardSlider.css';
import { carData } from '../data/dataMobil';

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
        touchEventsTarget="wrapper"
      >
        {carData.map((data) => {
          return (
            <SwiperSlide>
              <Card style={{ width: '18rem' }}>
                <Card.Img className="slideImg" variant="top" src={data.img} />
                <Card.Body>
                  <Card.Title><p>{data.carName}</p></Card.Title>
                  <Button id={data.id} variant="dark" href="/ProfilMobil">
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
