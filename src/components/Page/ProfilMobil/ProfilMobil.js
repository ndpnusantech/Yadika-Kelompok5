import NavScroll from '../../Navbar';
import Lower from '../../Footer';
import './profilMobil.css';
import ListGroup from 'react-bootstrap/ListGroup';

import { dataMobil, AboutCar } from '../../../data/dataMobil/dataAvanza';

import React, { Component } from 'react';

export default class ProfilMobil extends Component {
  render() {
    return (
      <>
        <NavScroll />
        <div className="profileMobilCon ">
          {dataMobil.map((data, index) => (
            <div className="d-flex ">
              <img
                alt=""
                className="imgMobil mt-5"
                variant="top"
                src={data.Img}
              />
              <div>
                {index === 0 && (
                  <ListGroup
                    id={AboutCar[index].id}
                    className="my-list-group"
                    style={{}}
                  >
                    <ListGroup.Item>
                      Plat Nomor : {AboutCar[index].plat}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Jenis Bensin : {AboutCar[index].bensin}
                    </ListGroup.Item>
                  </ListGroup>
                )}
              </div>
            </div>
          ))}
        </div>
        <Lower />
      </>
    );
  }
}
