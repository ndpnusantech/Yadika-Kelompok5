import Carousel from 'react-bootstrap/Carousel';

function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-flex "
          src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
          alt="First slide"
          style={{
            margin: 'auto',
            borderRadius: '15px',
            wight: '60%',
            height: '500px',
            marginTop: '3%',
            marginBottom: '6%',
          }}
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-flex "
          src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
          alt="First slide"
          style={{
            margin: 'auto',
            borderRadius: '15px',
            wight: '90%',
            height: '500px',
            marginTop: '3%',
            marginBottom: '6%',
          }}
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-flex "
          src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
          alt="First slide"
          style={{
            margin: 'auto',
            borderRadius: '15px',
            wight: '90%',
            height: '500px',
            marginTop: '3%',
            marginBottom: '6%',
          }}
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-flex "
          src="https://asset.kompas.com/crops/mXMD6sWaGHWJSkp1Lf9QlXgqsSI=/70x0:660x393/750x500/data/photo/2020/04/03/5e86fc907420a.jpg"
          alt="First slide"
          style={{
            margin: 'auto',
            borderRadius: '15px',
            wight: '90%',
            height: '500px',
            marginTop: '3%',
            marginBottom: '6%',
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
