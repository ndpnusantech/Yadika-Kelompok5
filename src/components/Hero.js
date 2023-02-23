import Carousel from 'react-bootstrap/Carousel';
import { potoMobil } from '../data/fotoMobil';

function CarouselSlider() {
  return (
    <>
      <Carousel>
        {potoMobil.map((potoMobil) => {
          return (
            <Carousel.Item id={potoMobil.id} interval={5000}>
              <img
                className="d-flex "
                src={potoMobil.img}
                alt="First slide"
                style={{
                  margin: 'auto',
                  borderRadius: '15px',
                  width: '100%',
                  height: '565px',
                  marginBottom: '3%',
                  objectFit: 'cover',
                }}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default CarouselSlider;
