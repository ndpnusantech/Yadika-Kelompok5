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
              <th>Id</th>
              <th>Nama Anda</th>
              <th>Mobil</th>
              <th>Plat</th>
              <th>Tanggal Peminjaman</th>
              <th>Tanggal Pengembalian</th>
              <th>Jumlah Hari</th>
              <th>Pembayaran Via</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{textAlign:'center'}}>
              <th>2167</th>
              <th>John</th>
              <th>Tesla Malibu</th>
              <th>D 1234 ABC</th>
              <th>3/10/2023</th>
              <th>3/11/2023</th>
              <th>1</th>
              <th>Dana</th>
              <th>Proses</th>
            </tr>
          </tbody>
        </table>
        </div>
      </div> <br /><br /><br />
      <Lower />
      </>
  );
}
