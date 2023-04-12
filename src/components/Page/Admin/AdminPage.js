import React, { useState } from "react";
import SidebarAdm from "../../SidebarAdm";
import "../Admin/admCss/adminPage.css";
import AdminDashboardCard from "./adminDashCardAccor";
import Dashboard from "../../Dashboard";
import { Table,Pagination } from "react-bootstrap";
import { carData } from "../../../data/dataMobil";

export default function AdminPage() {
  const [carList] = useState(carData);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const totalPages = Math.ceil(carList.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const selectedCars = carList.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="d-flex">
      <SidebarAdm title="Dashboard" />
      <div
        className="dasboardMain"
        style={{
          width: "100%",
          height: "695px",
          overflow: "auto",
          maxHeight: "694px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "78px",
            backgroundColor: "#edeaea",
            marginBottom: "2%",
          }}
        >
          <h1 style={{ padding: "15px 10px", fontFamily: "sans-serif" }}>
            Dashboard
          </h1>
        </div>
        <div className="cardAdm m-auto" style={{ width: "96%" }}>
          <div className="row">
            <div className="col-md-4">
              <AdminDashboardCard title="Mobil" link="/admin/dataMobil" />
            </div>
            <div className="col-md-4">
              <AdminDashboardCard title="Customer" link="/admin/dataPenyewa" />
            </div>
            <div className="col-md-4">
              <AdminDashboardCard title="Pendapatan" link="/revenue" />
            </div>
          </div>
          <Dashboard />
        </div>
        <div className="laporanMobil"style={{margin:'auto'}}>
          <h2 style={{textAlign:'center'}}>Pendapatan Mobil</h2>
          <Table striped bordered hover>
            <thead className="table-header">
              <tr>
                <th>ID</th>
                <th>Nama Mobil</th>
                <th>Jumlah Mobil</th>
                <th>Lama sewa</th>
                <th>Pendapatan</th>
                <th>Bulan</th>
              </tr>
            </thead>
            <tbody>
              {selectedCars.map((data) => (
                <tr key={data.id} className="table-row">
                  <th>{data.id}</th>
                  <th>{data.carName}</th>
                  <th>{data.jumlahMobil}</th>
                  <th>10 Hari</th>
                  <th>Rp.10.000.000</th>
                  <th>Agustus</th>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination style={{margin:'auto', display: 'flex', justifyContent: 'center'}}>
            <Pagination.First
              onClick={() => handlePageChange(1)}
              disabled={activePage === 1}
            />
            <Pagination.Prev
              onClick={() => handlePageChange(activePage - 1)}
              disabled={activePage === 1}
            />
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <Pagination.Item
                  key={pageNumber}
                  active={pageNumber === activePage}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              )
            )}
            <Pagination.Next
              onClick={() => handlePageChange(activePage + 1)}
              disabled={activePage === totalPages}
            />
            <Pagination.Last
              onClick={() => handlePageChange(totalPages)}
              disabled={activePage === totalPages}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
}
