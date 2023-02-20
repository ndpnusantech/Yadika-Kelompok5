import React, { Component } from 'react';
import '../components/css/maps.css';

export default class Maps extends Component {
  render() {
    return (
      <div className="containerMap">
        <div className="left">
          <p>
            Rental mobil kami berlokasi di pusat kota, hanya beberapa menit dari
            bandara dan stasiun kereta api. Kami mudah dijangkau dengan
            kendaraan pribadi atau transportasi umum. Jika Anda membutuhkan
            mobil untuk keperluan bisnis atau liburan, kami memiliki banyak
            pilihan kendaraan berkualitas tinggi yang tersedia untuk disewa
            dengan harga yang terjangkau. Silakan kunjungi kami di alamat kami
            dan jangan ragu untuk menghubungi kami untuk informasi lebih lanjut
            tentang sewa mobil.
          </p>
        </div>
        <div className="right">
          <img src="https://telset.id/wp-content/uploads/2016/07/google-maps-new-interface1.jpg" />
        </div>
      </div>
    );
  }
}
