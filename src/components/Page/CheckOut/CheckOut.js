import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Card, ListGroup } from 'react-bootstrap';
import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import './checkOut.css';
import { carData } from '../../../data/dataMobil';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CheckOut() {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(carData[0].carName);
  const [username, setUsername] = useState('');

  const handlePickupDateChange = (date) => {
    setPickupDate(date);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <>
      <NavScroll />
      <div className="conCheck d-flex">
        <h1>Check Out</h1>
        <div className="detailOrder">
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
          {' Details Orders '}
          {carData.slice(0, 1).map((data) => {
            return (
              <Card id={data.id} style={{ width: '22rem' }}>
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
          {' Indormasi Sewa '}
          <Card style={{ width: '30rem' }}>
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
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <Lower />
    </>
  );
}
