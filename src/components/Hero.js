import Carousel from 'react-bootstrap/Carousel';
import { dataCaro } from '../data/dataCarousel';

function CarouselSlider() {
  return (
    <div className="containerCaro">
      <Carousel>
        {dataCaro.map((imgCar) => {
          return (
            <Carousel.Item id={imgCar.id} interval={5000}>
              <img
                className="d-flex "
                src={imgCar.img}
                alt="First slide"
                style={{
                  margin: 'auto',
                  borderRadius: '15px',
                  paddingTop: '5%',
                  width: '100%',
                  height: '695px',
                }}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
