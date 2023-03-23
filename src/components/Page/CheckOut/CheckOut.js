import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Card, ListGroup } from "react-bootstrap";
import NavScroll from "../../Navbar";
import Lower from "../../Footer";
import "./checkOut.css";
import { carData } from "../../../data/dataMobil";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-datepicker/dist/react-datepicker.css";
import Countdown from "../../countdown";

export default function CheckOut() {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [selectedOption] = useState(carData[0].carName);
  const [username, setUsername] = useState("");

  const handlePickupDateChange = (date) => {
    setPickupDate(date);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  //
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleRedirect(path) {
    window.location.href = path;
  }
  //
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <NavScroll />
      <div className="conCheck d-flex">
        <h1>Check Out</h1>
        <div className="detailOrder">
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
          {" Details Orders "}
          {carData.slice(0, 1).map((data) => {
            return (
              <Card id={data.id} style={{ width: "22rem" }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                  <Card.Title>{data.carName}</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Kapasitas : {data.capacity}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Harga : Rp.{data.price} / Hari
                      </ListGroup.Item>
                      <ListGroup.Item>Diskon : 0%</ListGroup.Item>
                      <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <div className="infoCheck">
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
          {" Informasi Sewa "}
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className="nameChck">
                      <label>Nama Anda:</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Masukkan Nama"
                        onChange={handleUsernameChange}
                      />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div>
                      <label htmlFor="pickupDate">Tanggal Peminjaman:</label>
                      <DatePicker
                        placeholderText="Masukan Tanggal Peminjaman"
                        id="pickupDate"
                        selected={pickupDate}
                        onChange={handlePickupDateChange}
                        minDate={new Date()}
                      />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div>
                      <label htmlFor="returnDate">Tanggal Pengembalian:</label>
                      <DatePicker
                        placeholderText="Masukan Tanggal Pengembalian"
                        id="returnDate"
                        selected={returnDate}
                        onChange={handleReturnDateChange}
                        minDate={pickupDate}
                      />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item></ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div
        className="infoCheckout"
        style={{
          backgroundColor: "#c5c6d0",
          padding: "15px",
          width: "80%",
          margin: "70px auto",
          color: "black",
          textAlign: "justify",
          borderRadius: "15px",
        }}
      >
        <FontAwesomeIcon icon={faInfoCircle} className="icon mt-5" />
        {" Harap Dibaca"}
        <h6 style={{ margin: "50px auto 80px auto", lineHeight: "21px" }}>
          Syarat uang muka minimal 30% dari total harga umum diterapkan dalam
          transaksi untuk memastikan kesiapan pembeli dan mengurangi risiko
          pembayaran tidak tepat waktu. Jika pembeli tidak dapat atau tidak
          bersedia memberikan uang muka minimal 30%, maka biasanya uang muka
          yang telah diberikan sebelumnya akan hangus dan transaksi tidak dapat
          dilanjutkan. Pesanan dianggap hangus dan penjual berhak mencari
          pembeli lain yang bersedia memenuhi syarat tersebut.
        </h6>
      </div>
      <div className="confirmTabel">
        {pickupDate && returnDate && selectedOption && username && (
          <table>
            <thead>
              <tr>
                <th>Nama Anda</th>
                <th>Mobil</th>
                <th>Tanggal Peminjaman</th>
                <th>Tanggal Pengembalian</th>
                <th>Jumlah Hari</th>
                <th>Total Harga</th>
                <th>Uang Muka (30%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{username}</td>
                <td>{selectedOption}</td>
                <td>{pickupDate.toLocaleDateString()}</td>
                <td>{returnDate.toLocaleDateString()}</td>
                <td>{(returnDate - pickupDate) / (1000 * 60 * 60 * 24)}</td>
                <td>
                  {(
                    ((returnDate - pickupDate) / (1000 * 60 * 60 * 24)) *
                    carData.find((car) => car.carName === selectedOption).price
                  ).toLocaleString()}
                </td>
                <td>
                  {Math.floor(
                    ((returnDate - pickupDate) / (1000 * 60 * 60 * 24)) *
                      carData.find((car) => car.carName === selectedOption)
                        .price *
                      0.3
                  ).toLocaleString()}
                </td>
              </tr>
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  <p style={{ marginBottom: "20px" }}>
                    Silahkan pilih metode pembayaran:
                  </p>
                  <div className="payButton">
                    <button
                      onClick={() => {
                        handleShow();
                        setTimeout(() => {
                          handleRedirect("/History");
                        }, 6000);
                      }}
                      target="history"
                    >
                      <img src="./img/gpay.png" alt="Logo Transfer Bank" />
                    </button>
                    <button
                      onClick={() => {
                        handleShow();
                        setTimeout(() => {
                          handleRedirect("/History");
                        }, 6000);
                      }}
                      target="history"
                    >
                      <img src="./img/gpay.png" alt="Logo Transfer Bank" />
                    </button>
                    <button
                      onClick={() => {
                        handleShow();
                        setTimeout(() => {
                          handleRedirect("/History");
                        }, 6000);
                      }}
                      target="history"
                    >
                      <img src="./img/gpay.png" alt="Logo Transfer Bank" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <Lower />
      <div className="popUp">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Mohon Dipahami</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Sebelum melanjutkan, apakah Anda sudah sepenuhnya memahami
            persyaratan dan ketentuan yang terkait dengan layanan kami?
          </Modal.Body>
          <Modal.Footer>
            <div className="count d-flex">
              <p>Anda Akan berpindah dalam</p>
              <Countdown />
            </div>
            <Button
              variant="secondary"
              onClick={() => {
                window.location.href = "/SyrtKntuan";
              }}
            >
              Belum
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
