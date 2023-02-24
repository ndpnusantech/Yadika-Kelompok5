import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import './profilMobil.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { carData } from '../../../data/dataMobil';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProfilMobil extends Component {
  render() {
    return (
      <>
        <NavScroll />
        <div className="profileMobilCon ">
          {carData.map((data, index) => (
            <div className="d-flex ">
              {index === 0 && (
                <img
                  alt=""
                  className="imgMobil mt-5"
                  variant="top"
                  src={data.img}
                />
              )}
              <div>
                {index === 0 && (
                  <ListGroup id={data.id} className="my-list-group">
                    <ListGroup.Item>Mama Mobil : {data.carName}</ListGroup.Item>
                    <ListGroup.Item>Plat Nomor : {data.plat}</ListGroup.Item>
                    <ListGroup.Item>Jenis Bensin : {data.oil}</ListGroup.Item>
                    <ListGroup.Item>Kapasitas : {data.capacity}</ListGroup.Item>
                  </ListGroup>
                )}
              </div>
            </div>
          ))}
          <button className="profileRent">
            <Link to="/CheckOut">Rent Now</Link>
          </button>
        </div>
        <Lower />
      </>
    );
  }
}
