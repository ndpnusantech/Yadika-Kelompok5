import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import React from 'react';
import './syartKntuan.css';

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
        </div>
      </section>
      <Lower />
    </>
  );
};

export default SyrtKntuan;
