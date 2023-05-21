import React, { useState } from "react";
import { Table, Pagination, Button, Modal } from "react-bootstrap";
import SidebarAdm from "../../SidebarAdm";
import "./admCss/dataMobilAdm.css";
import { carData } from "../../../data/dataMobil";
import { FaEdit, FaTrash } from "react-icons/fa";
import CarForm from "../../FormComponent";

export default function DataMobilAdm() {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;

  const [carList] = useState(carData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [selectCar, setSelectCar] = useState([carData]);
  const [data, setData] = useState(carData);
  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => {
    const newData = selectCar.filter((data) => data.id !== id);
    setSelectCar(newData);
    console.log("Terhapus");
  };

  const handleEdit = (id) => {
    const newData = data.find((data) => data.id === id);
    setEditData(newData);
    console.log("click");
  };

  const handleSave = (event) => {
    event.preventDefault();
    const newData = data.map((data) => {
      if (data.id === editData.id) {
        return editData;
      }
      return data;
    });
    setData(newData);
    setEditData(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const totalPages = Math.ceil(carList.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const selectedCars = carList.slice(startIndex, startIndex + itemsPerPage);

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
          <h1 style={{ padding: "15px 10px", fontFamily: "sans-serif" }}>
            Kelola Mobil
          </h1>
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
              <h4 style={{ padding: "5px 0 0 0" }}>
                Kelola <span style={{ color: "GrayText" }}>Mobil</span>
              </h4>
             <CarForm/>
            </div>
            <div
              className="crudBody table-responsive mt-5"
              style={{ width: "100%", height: "450px" }}
            >
              <Table striped bordered hover>
                <thead className="table-header">
                  <tr>
                    <th>ID</th>
                    <th>Model</th>
                    <th>Brand</th>
                    <th>Nama Mobil</th>
                    <th>Jumlah Mobil</th>
                    <th>Nomor Plat</th>
                    <th>Nomor BPKB</th>
                    <th>Kapasitas</th>
                    <th>Harga</th>
                    <th>Gps</th>
                    <th>Kilometer Mobil</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCars.map((data) => (
                    <tr key={data.id} className="table-row">
                      <th>{data.id}</th>
                      <th>{data.model}</th>
                      <th>{data.brand}</th>
                      <th>{data.carName}</th>
                      <th>{data.jumlahMobil}</th>
                      <th>{data.plat}</th>
                      <th>{data.noBPKB}</th>
                      <th>{data.capacity}</th>
                      <th>{data.price}</th>
                      <th>{data.gps}</th>
                      <th>120 Km</th>
                      <th>
                        <select>
                          <option value="tersedia">Tersedia</option>
                          <option value="on service">On Service</option>
                          <option value="tersewa">Tersewa</option>
                        </select>
                      </th>
                      <td className="td-admin">
                        <button
                          className="btnAc"
                          onClick={() => handleEdit(data.id)}
                        >
                          <FaEdit />
                        </button>
                        <button className="btnAc" onClick={handleShow}>
                          <FaTrash />
                        </button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Body>
                            Apakah Anda yakin ingin menghapus item ini? Tindakan
                            ini tidak dapat dibatalkan.
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <button
                              className="btn btn-primary"
                              onClick={() => handleDelete(data.id)}
                            >
                              Save Changes
                            </button>
                          </Modal.Footer>
                        </Modal>
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
