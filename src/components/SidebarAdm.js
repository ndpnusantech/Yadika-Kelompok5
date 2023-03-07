import React from "react";
import { Link } from "react-router-dom";

export default function SidebarAdm() {
  return (
    <div>
      <div
        className="sideBarAdm"
        style={{
          padding: "20px",
          backgroundColor: "gray",
          width: "20%",
          height: "695px",
        }}
      >
        <div className="logo">
          <img
            src="./img/logo.png"
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <hr />
        <h2>Dashboard</h2>
        <hr />
        <div className="pageSidebar" style={{ marginTop: "50%" }}>
          <ul style={{ listStyle: "none" }}>
            <li>
              <hr />
              <p style={{ fontSize: "12px" }}>Kelola Mobil</p>
              <Link to="/admin">Data Jenis Mobil</Link>
              <hr />
            </li>
            <li>
            <p style={{ fontSize: "12px" }}>Kelola Penyewa</p>
              <Link to="/admin/users">Data Penyewa</Link>
              <hr />
            </li>
            <li>
            <p style={{ fontSize: "12px" }}>Pengaturan </p>
              <Link to="/admin/products">Manajemen Laporan</Link>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
