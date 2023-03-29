import React, { useState } from "react";
import { Table, Pagination, Button, Modal } from "react-bootstrap";
import SidebarAdm from "../../SidebarAdm";
import "./admCss/dataMobilAdm.css";
import { carData } from "../../../data/dataMobil";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function DataMobilAdm({ onAddCar }) {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;
  const [showForm, setShowForm] = useState(false);
  const [carList] = useState(carData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [fuel, setFuel] = useState("");
  const [plat, setPlat] = useState("");
  const [bpkb, setBpkb] = useState("");
  const [allCar, setAllCar] = useState("");
  const closeForm = () => {
    setShowForm(false);
    setMake("");
    setModel("");
    setYear("");
    setPrice("");
    setCapacity("");
    setFuel("");
    setPlat("");
    setBpkb("");
    setAllCar("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCar = {
      make: make,
      model: model,
      year: year,
      price: price,
      capacity: capacity,
      fuel: fuel,
      plat: plat,
      bpkb: bpkb,
      allCar: allCar,
    };
    onAddCar(newCar);
    setMake("");
    setModel("");
    setYear("");
    setPrice("");
    setCapacity("");
    setFuel("");
    setPlat("");
    setBpkb("");
    setAllCar("");
  };
  const [selectCar, setSelectCar] = useState([carData]);
  const [data, setData] = useState(carData);
  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => {
    const newData = selectCar.filter((data) => data.id !== id);
    setSelectCar(newData);
    console.log("click");
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
              <h4 style={{ padding: "5px 0 0 0" }}>
                Kelola <span style={{ color: "GrayText" }}>Mobil</span>
              </h4>
              <button className="btn" onClick={handleButtonClick}>
                Tambah Mobil
              </button>
              {showForm && (
                <form
                  onSubmit={handleSubmit}
                  className="form-container"
                  style={{ overflowX: "clip", width: "60%" }}
                >
                  <label htmlFor="make" className="form-label">
                    Gambar: <br />
                    <input
                      type="file"
                      id="img"
                      className="form-input"
                      value={make}
                      onChange={(event) => setMake(event.target.value)}
                    />
                  </label>
                  <label htmlFor="model" className="form-label">
                    Brand: <br />
                    <input
                      type="text"
                      id="brand"
                      className="form-input"
                      value={model}
                      onChange={(event) => setModel(event.target.value)}
                    />
                  </label>
                  <label htmlFor="year" className="form-label">
                    Nama Mobil: <br />
                    <input
                      type="text"
                      id="carName"
                      className="form-input"
                      value={year}
                      onChange={(event) => setYear(event.target.value)}
                    />
                  </label>
                  <label htmlFor="price" className="form-label">
                    Harga: <br />
                    <input
                      type="text"
                      id="price"
                      className="form-input"
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                    />
                  </label>
                  <label htmlFor="capacity" className="form-label">
                    Kapasitas: <br />
                    <input
                      type="text"
                      id="capacity"
                      className="form-input"
                      value={capacity}
                      onChange={(event) => setCapacity(event.target.value)}
                    />
                  </label>
                  <label htmlFor="fuel" className="form-label">
                    Bensin: <br />
                    <input
                      type="text"
                      id="capacity"
                      className="form-input"
                      value={fuel}
                      onChange={(event) => setFuel(event.target.value)}
                    />
                  </label>
                  <label htmlFor="plat" className="form-label">
                    Plat: <br />
                    <input
                      type="text"
                      id="capacity"
                      className="form-input"
                      value={plat}
                      onChange={(event) => setPlat(event.target.value)}
                    />
                  </label>
                  <label htmlFor="bpkb" className="form-label">
                    No BPKB: <br />
                    <input
                      type="text"
                      id="capacity"
                      className="form-input"
                      value={bpkb}
                      onChange={(event) => setBpkb(event.target.value)}
                    />
                  </label>
                  <button
                    onClick={closeForm}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <button type="submit" className="form-button">
                    Tambah Mobil
                  </button>
                </form>
              )}
            </div>

            <div
              className="crudBody table-responsive mt-5"
              style={{ width: "100%", height: "450px" }}
            >
              <Table striped bordered hover>
                <thead className="table-header">
                  <tr>
                    <th>ID</th>
                    <th>Merk</th>
                    <th>Jumlah Mobil</th>
                    <th>Nomor Plat</th>
                    <th>Nomor BPKB</th>
                    <th>Kapasitas</th>
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
                      <td>{data.jumlahMobil}</td>
                      <td>{data.plat}</td>
                      <td>{data.noBPKB}</td>
                      <td>{data.capacity}</td>
                      <td>{data.price}</td>
                      <td>{data.status}</td>
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
              <div className={`edit`}>
                {editData && (
                  <form onSubmit={handleSave} className="editForm">
                    <button className="close" onClick={() => setEditData(null)}>
                      {" "}
                      <i className="fas fa-times"></i>
                    </button>
                    <h4 style={{ fontSize: "30px", paddingTop: "12px" }}>
                      Edit Mobil
                    </h4>
                    <div className="labelEdit d-flex">
                      <div className="mainLabel">
                        <label>
                          Brand:{" "}
                          <input
                            type="text"
                            name="brand"
                            value={editData.brand}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Bpkb:
                          <input
                            type="text"
                            name="bpkb"
                            value={editData.bpkb}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Harga:
                          <input
                            type="text"
                            name="price"
                            value={editData.price}
                            onChange={handleChange}
                          />
                        </label>
                      </div>
                      <div className="mainLabel">
                        <label>
                          Kapasitas:
                          <input
                            type="text"
                            name="kapasitas"
                            value={editData.kapasitas}
                            onChange={handleChange}
                          />
                        </label>  
                        <label>
                          Plat:
                          <input
                            type="text"
                            name="plat"
                            value={editData.plat}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Bensin:
                          <input
                            type="text"
                            name="fuel"
                            value={editData.fuel}
                            onChange={handleChange}
                          />
                        </label>
                      </div>
                    </div>
                    <button
                      style={{ padding: "7px 35px", marginBottom: "15px" }}
                      type="submit"
                    >
                      Save
                    </button>
                  </form>
                )}
              </div>
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
