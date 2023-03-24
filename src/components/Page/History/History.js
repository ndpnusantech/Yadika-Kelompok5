import React from "react";
import NavScroll from "../../Navbar";
import Lower from "../../Footer";
import './history.css'

export default function History() {
  return (
    <>
      <NavScroll />
      <div className="historyCon" style={{ marginTop: "5%",marginBottom:'5%' }}>
        <div className="historyPro" >
          <div className="hisPhoto">
            <img src="./logo.png" alt="" />
          </div>
            <div className="hisNama"><h3>Hai , John Doe</h3></div>
        </div>
        <div className="historyMainCon">
          <h1 className="mt-5 ms-4">History Pembayaran</h1>
        <table>
          <thead>
            <tr>
              <th>Nama Anda</th>
              <th>Mobil</th>
              <th>Plat</th>
              <th>Tanggal Peminjaman</th>
              <th>Tanggal Pengembalian</th>
              <th>Jumlah Hari</th>
              <th>Pembayaran Via</th>
              <th>Uang Masuk</th>
              <th>Sisa Tagihan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Tesla Malibu</td>
              <td>D 1234 ABC</td>
              <td>3/10/2023</td>
              <td>3/11/2023</td>
              <td>1</td>
              <td>Dana</td>
              <td>300,000</td>
              <td>450,000</td>
              <td>Proses</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div> <br /><br /><br />
      <Lower />
      </>
  );
}
