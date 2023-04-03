import React from "react";
import SidebarAdm from "../../SidebarAdm";
import "./admCss/mobilTersewa.css";
import { sewaData } from "../../../data/dataPenyewa";
import { Table } from "react-bootstrap";

export default function ListMobilTersewa() {
  return (
    <div className="d-flex">
      <SidebarAdm title="Mobil Tersewa" />
      <div
        className="dasboardMain"
        style={{
          width: "calc(100% - 260px)",
          height: "695px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "78px",
            backgroundColor: "#edeaea",
            marginBottom: "5%",
          }}
        >
          <h1 style={{ padding: "15px 10px" }}>Mobil Tersewa</h1>
          <div style={{ width: "75%", margin: "auto" }}>
            <h4 style={{marginBottom:'50px',marginTop:'80px'}}>Mobil Tersewa</h4>
            <div className="tableTersewa">
            <Table striped bordered hover>
                <thead>
                <tr>
                  <th>Id</th>
                  <th>Mobil</th>
                  <th>Nama Mobil</th>
                  <th>Nama</th>
                  <th>No Telp</th>
                  <th>Email</th>
                  <th>Tanggal Penyewaan</th>
                  <th>Jumlah hari Penyewaan</th>
                  <th>Pembayaran Via</th>
                  <th>Uang Masuk</th>
                  <th>Uang Sisa</th>
                  <th>No Bpkb</th>
                  <th>No Plat</th>
                  <th>Proses</th>
                  <th>Lacak Moobil</th>
                </tr>
                </thead>
                {sewaData.map((data) => (
                  <tbody>
                  <tr>
                    <th>{data.id}</th>
                    <th><img src="/img/cars-img/tesla-model3.png" alt="" srcset=""style={{width:'50px',height:'40px'}} /></th>
                    <th>Tesla Malibu</th>
                    <th>{data.nama}</th>
                    <th>{data.telp}</th>
                    <th>{data.email}</th>
                    <th>12-12-2023 s/d 20-12-2023</th>
                    <th>8 Hari</th>
                    <th>Dana</th>
                    <th>2,040,000</th>
                    <th>4,760,000</th>
                    <th>84017401247</th>
                    <th>D 1234 ABC</th>
                    <select>
                      <option value="Proses">Proses</option>
                      <option value="Konfirm">Konfirmasi</option>
                      <option value="Hangus">Hangus</option>
                    </select>
                    <th>
                    <button className="btn btn-success">Lacak</button>
                    </th>
                  </tr>
                </tbody>
                ))}
              </Table>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
