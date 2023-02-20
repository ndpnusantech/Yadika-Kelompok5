import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
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
              pilihan mobil yang luas dan solusi transportasi yang sesuai dengan
              kebutuhan pelanggan kami.
            </li>
            <br />
            <li className="list-group-item">
              Dengan lebih dari 90 tahun pengalaman di bidang ini, kami memiliki
              tim yang berdedikasi dan profesional yang selalu siap untuk
              membantu pelanggan kami. Kami bangga dengan standar pelayanan yang
              tinggi dan kualitas mobil yang kami tawarkan, dan kami terus
              berusaha untuk meningkatkan layanan kami untuk memberikan
              pengalaman bepergian terbaik bagi pelanggan kami
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
