import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import SidebarAdm from "../../SidebarAdm";
import "./admCss/dataMobilAdm.css";
import { carData } from "../../../data/dataMobil";

export default function DataMobilAdm() {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(carData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const startIndex = (activePage - 1) * itemsPerPage;
  const selectedCars = carData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="d-flex">
      <SidebarAdm title="Kelola Mobil" />
      <div
        className="dasboardMain"
        style={{ width: "calc(100% - 200px)", height: "690px" }}
      >
        <div
          style={{
            width: "100%",
            height: "78px",
            backgroundColor: "#edeaea",
            marginBottom: "5%",
          }}
        >
          <h1 style={{ padding: "15px 10px" }}>Kelola Mobil</h1>
        </div>
        <div className="CrudData m-auto" style={{ width: "100%" }}>
          <div
            className="headerCrud mt-5 m-auto"
            style={{
              width: "800px",
              height: "55px",
              padding: "8px",
            }}
          >
            <div className="d-flex">
            <h4 style={{padding:'5px 0 0 0'}}>
              Kelola <span style={{color:'GrayText'}}>Mobil</span>
            </h4>
            <button class="btn"><i class="fas fa-plus"></i> Tambah Mobil</button>

            </div>
            <div className="crudBody mt-5" style={{ width: "100%", height: "98%" }}>
              <Table striped bordered hover>
                <thead className="table-header">
                  <tr>
                    <th>ID</th>
                    <th>Merk</th>
                    <th>Harga</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCars.map((data) => (
                    <tr key={data.id} className="table-row">
                      <td>{data.id}</td>
                      <td>{data.carName}</td>
                      <td>{data.price}</td>
                      <td>{data.status}</td>
                      <td className="table-action">
                        <button>Edit</button>
                        <button>Hapus</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Pagination>
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
      </div>
    </div>
  );
}
