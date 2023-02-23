import React, { Component } from 'react';
import CardSlide from '../../CardSlide';
import NavScroll from '../../Navbar';
import CarouselSlider from '../../Hero';
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
        <div className="containerMap">
          <div className="left">
            <p>
              Rental mobil kami berlokasi di pusat kota, hanya beberapa menit
              dari bandara dan stasiun kereta api. Kami mudah dijangkau dengan
              kendaraan pribadi atau transportasi umum. Jika Anda membutuhkan
              mobil untuk keperluan bisnis atau liburan, kami memiliki banyak
              pilihan kendaraan berkualitas tinggi yang tersedia untuk disewa
              dengan harga yang terjangkau. Silakan kunjungi kami di alamat kami
              dan jangan ragu untuk menghubungi kami untuk informasi lebih
              lanjut tentang sewa mobil.
            </p>
          </div>
          <div className="right">
            <img src="https://telset.id/wp-content/uploads/2016/07/google-maps-new-interface1.jpg" />
          </div>
        </div>

        <section className="ABOUT" id="#">
          <div className="containerAbout">
            <h1 style={{ textAlign: 'center' }}>Tentang Kami</h1>
            <hr />
            <ul className="list-group">
              <li className="list-group-item">
                Kami adalah perusahaan rental mobil yang berdedikasi untuk
                memberikan pengalaman bepergian yang nyaman dan mudah bagi
                pelanggan kami. Kami memahami bahwa setiap perjalanan memiliki
                kebutuhan yang berbeda dan kami berkomitmen untuk menyediakan
                pilihan mobil yang luas dan solusi transportasi yang sesuai
                dengan kebutuhan pelanggan kami.
              </li>
              <br />
              <li className="list-group-item">
                Dengan lebih dari 90 tahun pengalaman di bidang ini, kami
                memiliki tim yang berdedikasi dan profesional yang selalu siap
                untuk membantu pelanggan kami. Kami bangga dengan standar
                pelayanan yang tinggi dan kualitas mobil yang kami tawarkan, dan
                kami terus berusaha untuk meningkatkan layanan kami untuk
                memberikan pengalaman bepergian terbaik bagi pelanggan kami
              </li>
            </ul>
          </div>
        </section>
        <Lower />
      </div>
    );
  }
}
