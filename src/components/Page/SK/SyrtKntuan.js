import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import React from 'react';
import './syartKntuan.css';
import { Card } from 'react-bootstrap';

const SyrtKntuan = () => {
  return (
    <>
      <NavScroll />
      <section className="SYARAT">
        <div className="containerSyarat">
          <h1>Persyaratan Rental</h1>
          <div className="mainSyarat">
            <div className="card" style={{ height: '300px' }}>
              <div className="card-header"></div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Umur minimal 21 tahun, dengan masa berkendara minimal 1 tahun.
                </li>
                <li className="list-group-item">
                  Memiliki SIM Surat Izin Mengemudi yang masih berlaku.
                </li>
                <li className="list-group-item">
                  Menunjukkan kartu identitas yang masih berlaku, seperti KTP
                  atau paspor.
                </li>
                <li className="list-group-item">
                  Melakukan pembayaran deposit
                </li>
                <li className="list-group-item">
                  Membaca dan menyetujui syarat dan ketentuan sewa mobil yang
                  diberikan oleh perusahaan.
                </li>
                <li className="list-group-item">
                  Diharapkan agar tidak merusak mobil rental.
                </li>
              </ul>
            </div>
          </div>
          <div className="jaminanRent">
            <Card style={{ width: '1080px' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <Lower />
    </>
  );
};

export default SyrtKntuan;
