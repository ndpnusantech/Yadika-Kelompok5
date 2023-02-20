import React, { Component } from 'react';
import CardSlide from '../../CardSlide';
import NavScroll from '../../Navbar';
import CarouselSlider from '../../Hero';
import Maps from '../../Maps';
import Syarat from '../../Syarat';
import About from '../../About';
import Lower from '../../Footer';
import { Button } from 'react-bootstrap';

// CSS
import './mainPage.css';

export default class Mainpage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#9A9A9A' }}>
        <NavScroll />
        <CarouselSlider />
        <div className="CardSlide">
          <h1>Cari Mobil Anda</h1>
          <Button className="see">Lihat Semua Mobil</Button>
          <CardSlide />
        </div>
        <Maps />
        <Syarat />
        <About />
        <Lower />
      </div>
    );
  }
}
