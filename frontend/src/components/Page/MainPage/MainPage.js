import React, { Component } from "react";
import CardSlide from "../../CardSlide";
import NavScroll from "../../Navbar";
import CarouselSlider from "../../Hero";
import Lower from "../../Footer";
import { Button } from "react-bootstrap";

// CSS
import "./mainPage.css";

export default class Mainpage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#9A9A9A" }}>
        <NavScroll />
        <CarouselSlider />
        <div className="CardSlide">
          <div className="carSlideSee d-flex">
            <h1>Cari Mobil Anda</h1>
            <Button className="see" href="/CarItem">
              Lihat Semua Mobil
            </Button>
          </div>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.87531909058!2d107.53495701389649!3d-7.023938794926424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ed28408eab67%3A0xc39aa21e7016ed40!2sSMA%20Yadika%20Soreang!5e0!3m2!1sid!2sid!4v1679619611543!5m2!1sid!2sid"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="lokasi rent"
              style={{ border: "2px solid #b7abc7s" }}
            />
          </div>
        </div>

        <section className="ABOUT" id="#">
          <div className="containerAbout">
            <h1 style={{ textAlign: "center" }}>Tentang Kami</h1>
            <hr />
            <div className="aboutGroup d-flex">
              <ul className="list-group">
                <li className="list-group-item" style={{ textAlign: "left" }}>
                  Kami adalah perusahaan rental mobil yang berdedikasi untuk
                  memberikan pengalaman bepergian yang nyaman dan mudah bagi
                  pelanggan kami. Kami memahami bahwa setiap perjalanan memiliki
                  kebutuhan yang berbeda dan kami berkomitmen untuk menyediakan
                  pilihan mobil yang luas dan solusi transportasi yang sesuai
                  dengan kebutuhan pelanggan kami.
                </li>
                <br />
                <li className="list-group-item" style={{ textAlign: "left" }}>
                  Dengan lebih dari 90 tahun pengalaman di bidang ini, kami
                  memiliki tim yang berdedikasi dan profesional yang selalu siap
                  untuk membantu pelanggan kami. Kami bangga dengan standar
                  pelayanan yang tinggi dan kualitas mobil yang kami tawarkan,
                  dan kami terus berusaha untuk meningkatkan layanan kami untuk
                  memberikan pengalaman bepergian terbaik bagi pelanggan kami
                </li>
              </ul>
              <div className="aboutImgCar">
                <img
                  src="./img/cars-img/tesla-model3.png"
                  style={{ height: "250px", widht: "250px" }}
                  alt="tesla"
                />
              </div>
            </div>
          </div>
        </section>
        <Lower />
      </div>
    );
  }
}
