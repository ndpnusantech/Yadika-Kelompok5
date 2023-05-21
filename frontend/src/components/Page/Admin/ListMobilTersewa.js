import React, { useState } from "react";
import SidebarAdm from "../../SidebarAdm";
import "./admCss/mobilTersewa.css";
import { sewaData } from "../../../data/dataPenyewa";
import { Table, Button } from "react-bootstrap";

export default function ListMobilTersewa() {
  const [selectedData, setSelectedData] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleDetailClick = (data) => {
    setSelectedData(data);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setSelectedData(null);
    setShowDetail(false);
  };
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
          <h1 style={{ padding: "15px 10px", fontFamily: "sans-serif" }}>
            Mobil Tersewa
          </h1>
          <div style={{ width: "75%", margin: "auto" }}>
            <h4 style={{ marginBottom: "50px", marginTop: "80px" }}>
              Mobil Tersewa
            </h4>
            <div className="tableTersewa">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Mobil</th>
                    <th>Nama Mobil</th>
                    <th>Penyewa</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody className="outTbody">
                  {sewaData.map((rowData) => (
                    <tr key={rowData.id}>
                      <th>{rowData.id}</th>
                      <th>
                        <img
                          src="/img/cars-img/tesla-model3.png"
                          alt=""
                          srcSet=""
                          style={{ width: "50px", height: "40px" }}
                        />
                      </th>
                      <th>Tesla Malibu</th>
                      <th>{rowData.nama}</th>
                      <th>
                        <Button onClick={() => handleDetailClick(rowData)}>
                          Detail
                        </Button>
                      </th>
                    </tr>
                  ))}
                </tbody>
                <div className="tableDetail">
                  {selectedData && showDetail && (
                    <div className="sewaListDetail">
                      <div
                        className="headDetail d-flex"
                        style={{
                          position: "fixed",
                          top: '130px',
                          left: '404px',
                          width: "800px",
                          backgroundColor: "white",
                        }}
                      >
                        <h4 style={{ textAlign: "left" }}>Detail</h4>
                        <button
                          style={{
                            border: "none",
                            fontWeight: "bold",
                            fontSize: "20px",
                            background: "none",
                          }}
                          onClick={handleCloseDetail}
                        >
                          X
                        </button>
                      </div>
                      <table
                        style={{
                          overflow: "auto",
                          maxHeight: "500px",
                          width: "800px",
                          borderCollapse: "collapse",
                          border: "none",
                          backgroundColor: "green",
                        }}
                      >
                        <tr>
                          <th>No Telp</th>
                          <th>:</th>
                          <th>08298164</th>
                        </tr>
                        <tr>
                          <th>Email</th>
                          <th>:</th>
                          <th>John@gmail.com</th>
                        </tr>
                        <tr>
                          <th>Tanggal Penyewa</th>
                          <th>:</th>
                          <th>12-Maret-2024</th>
                        </tr>
                        <tr>
                          <th>Tanggal Pengambilan</th>
                          <th>:</th>
                          <th>12-Maret-2024</th>
                        </tr>
                        <tr>
                          <th>Tanggal Pengembalian</th>
                          <th>:</th>
                          <th>14-Maret-2024</th>
                        </tr>
                        <tr>
                          <th>Pembayaran</th>
                          <th>:</th>
                          <th>Dana</th>
                        </tr>
                        <tr>
                          <th>Uang Masuk</th>
                          <th>:</th>
                          <th>Rp.450,000</th>
                        </tr>
                        <tr>
                          <th>Uang Sisa</th>
                          <th>:</th>
                          <th>Rp.600,000</th>
                        </tr>
                        <tr>
                          <th>Bukti Pembayaran</th>
                          <th>:</th>
                          <th>
                            <img
                              src="/img/qr.png"
                              alt=""
                              srcset=""
                              style={{ width: "250px", height: "250px" }}
                            />
                          </th>
                        </tr>
                        <tr>
                          <th colSpan={1}></th>
                          <th colSpan={2}>
                            <Button>Lacak Mobil</Button>
                          </th>
                        </tr>
                      </table>
                    </div>
                  )}
                </div>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}