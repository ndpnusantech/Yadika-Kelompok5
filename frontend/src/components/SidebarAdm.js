import React from "react";
import { Link } from "react-router-dom";
import '../components/css/sidebarAdm.css'

export default function SidebarAdm(props) {
  return (
    <div style={{width:'20%',height:"695px", padding: '20px',backgroundColor:'gray'}}>
      <div
        className="sideBarAdm"
      >
        <div className="logo">
          <img
            src="/img/logo.png"
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <hr />
        <h4>{props.title}</h4>
        <hr />
        <div className="pageSidebar"style={{marginTop:'50%'}} >
          <ul style={{ listStyle: "none" }}>
            <li>
              <hr />
              <p style={{ fontSize: "12px" }}>Kelola Mobil</p>
              <Link to="/admin/dataMobil">Data Jenis Mobil</Link>
              <br /><br />
              <Link to="/admin/mobilTersewa">Mobil Tersewa</Link>
              <hr />
            </li>
            <li>
            <p style={{ fontSize: "12px" }}>Kelola Penyewa</p>
              <Link to="/admin/dataPenyewa">Data Penyewa</Link>
              <hr />
            </li>
            <li>
            <p style={{ fontSize: "12px" }}>Pengaturan </p>
              <Link to="/admin">Dashboard</Link>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
