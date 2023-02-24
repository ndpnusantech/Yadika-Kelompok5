import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { carData } from '../../../data/dataMobil';

function CheckOut() {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handlePickupDateChange = (date) => {
    setPickupDate(date);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div>
      <h1>Form Peminjaman Mobil</h1>
      <form>
        <div className="nameChck">
          <input type="text" name="username" placeholder="Masukkan username" />
        </div>
        <div>
          <label htmlFor="pickupDate">Tanggal Peminjaman:</label>
          <DatePicker
            id="pickupDate"
            selected={pickupDate}
            onChange={handlePickupDateChange}
            minDate={new Date()}
          />
        </div>
        <div>
          <label htmlFor="returnDate">Tanggal Pengembalian:</label>
          <DatePicker
            id="returnDate"
            selected={returnDate}
            onChange={handleReturnDateChange}
            minDate={pickupDate}
          />
        </div>
        <div>
          <h1>Dropdown List</h1>
          <select value={selectedOption} onChange={handleChange}>
            <option value="">--Select an option--</option>
            {carData.map((data) => (
              <option key={data.id} value={data.carName}>
                {data.carName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CheckOut;
