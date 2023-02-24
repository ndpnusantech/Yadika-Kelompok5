import React from 'react'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './carItem.css'

const CarItem = (props) => {

    const {imgUrl, model, carName, automatic, speed, price} = props.item

  return <Col lg='4' md='4' sm='6' className='mb-5'>
    <div className="car-item">
        <div className="car-img">
            <img src={imgUrl} alt="" className='w-100'/>
        </div>

        <div className="car-item-content mt-4">
            <h4 className="section-title text-center">{carName}</h4>
            <h6 className="rent-price text-center mt-"> Rp.{price}.000<span>/ Hari</span></h6>

            <div className="car-item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                <span className='d-flex align-items-center gap-1'><i class="ri-car-line"></i>{model}</span>
                <span className='d-flex align-items-center gap-1'><i class="ri-settings-2-line"></i>{automatic}</span>
                <span className='d-flex align-items-center gap-1'><i class="ri-timer-flash-line"></i>{speed}</span>
            </div>

            <button className="w-50 car-item-btn car-btn-rent">
                <Link to={`/cars/${carName}`}>Rent</Link>
            </button>

            <button className="w-50 car-item-btn car-btn-details">
                <Link to={`/cars/${carName}`}>Details</Link>
            </button>
        </div>
    </div>
  </Col>
}

export default CarItem;