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

  const [showQrModal, setShowQrModal] = useState(false);
  const handleAgree = () => {
    setShow(false);
    setShowQrModal(true);
  };
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  // Upload
  const [file, setFile] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

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
                  <br />
                  <br />
                  <p style={{ marginBottom: "20px" }}>
                    Silahkan pilih metode pembayaran:
                  </p>
                  <div className="payButton">
                    <button
                      onClick={() => {
                        handleShow();
                      }}
                    >
                      <img src="./img/ovov.png" alt="Logo Transfer Bank" />
                    </button>
                    <button>
                      <img src="./img/debit.png" alt="Logo Transfer Bank" />
                    </button>
                    <button>
                      <img src="./img/gpay.png" alt="Logo Transfer Bank" />
                    </button>
                    <br />
                    <br />
                    <label htmlFor="file-input" className="custom-file-upload">
                      Upload Bukti Pembayaran
                    </label>
                    <input
                      id="file-input"
                      type="file"
                      onChange={handleFileInputChange}
                      style={{display: 'none'}}
                    />
                    <div id="buktiImage">
                      {file && (
                        <img src={URL.createObjectURL(file)} alt="Preview" />
                      )}
                    </div>
                    <br />
                    <br />
                    <Button onClick={handleShowModal}>Kirim</Button>
                    <Modal
                      show={showModal}
                      onHide={handleCloseModal}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Terima Kasih</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Pesan telah berhasil dikirim, Tunggu dalam 60 menit untuk memproses peminjaman. </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" href="/History">
                          Tutup
                        </Button>
                      </Modal.Footer>
                    </Modal>
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
            <Button
              variant="secondary"
              onClick={() => {
                handleAgree();
                setTimeout(() => {
                  const h6Element = document.querySelector(".noteQr");
                  if (h6Element) {
                    h6Element.parentNode.removeChild(h6Element);
                  }
                }, 5000); // delay execution for 4 seconds (4000 milliseconds)
              }}
            >
              Sudah
            </Button>
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
        {showQrModal && (
          <Modal
            show={showQrModal}
            onHide={() => setShowQrModal(false)}
            backdrop="static"
            keyboard={false}
            style={{
              backgroundImage: "url('/img/qr.png')",
              width: "400px",
              height: "400px",
              margin: "auto",
              position: "absolute",
              top: "1300px",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "white",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {
                setShowQrModal(false);
              }}
              style={{ position: "absolute", bottom: "3px", right: "5px" }}
            ></button>
            <h6
              className="noteQr"
              style={{
                position: "absolute",
                right: "32px",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              silahkan scan qr code ini untuk pembayaran
            </h6>
          </Modal>
        )}
      </div>
    </div>
  );
}
