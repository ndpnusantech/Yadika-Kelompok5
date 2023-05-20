import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import './profilMobil.css';
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
                 <table id={data.id} className="my-list-group">
                 <tbody>
                  <tr>
                    <td>Id</td>
                    <td>#{data.id}</td>
                  </tr>
                   <tr>
                     <td>Brand</td>
                     <td>{data.brand}</td>
                   </tr>
                   <tr>
                     <td>Mama Mobil</td>
                     <td>{data.carName}</td>
                   </tr>
                   <tr>
                     <td>Jenis Bensin</td>
                     <td>{data.oil}</td>
                   </tr>
                   <tr>
                     <td>Kapasitas</td>
                     <td>{data.capacity}</td>
                   </tr>
                   <tr>
                     <td>Harga</td>
                     <td>Rp {data.price}</td>
                   </tr>
                   <tr>
                     <td>Gps</td>
                     <td>{data.gps}</td>
                   </tr>
                   <tr>
                     <td>Model</td>
                     <td>{data.model}</td>
                   </tr>
                   <tr>
                     <td>Kilo Meter Per Liter</td>
                     <td>{data.speed}</td>
                   </tr>
                   <tr>
                     <td>Status</td>
                     <td>{data.status}</td>
                   </tr>
                 </tbody>
               </table>
                )}
              </div>
            </div>
          ))}
          <Link to={'/CheckOut'}>
            <button className="profileRent">Rent Now</button>
          </Link>
        </div>
        <Lower />
      </>
    );
  }
}
