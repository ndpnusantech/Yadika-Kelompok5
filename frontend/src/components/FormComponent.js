import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CarForm = ({ onAddCar, carData,props }) => {

  const [showForm, setShowForm] = useState(false);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [fuel, setFuel] = useState("");
  const [plat, setPlat] = useState("");
  const [bpkb, setBpkb] = useState("");

  const handleButtonClick = () => {
    setShowForm(true);
  };

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
    };
    onAddCar(newCar);
    closeForm();
  };

  return (
    <div>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="form-container"
          style={{ width: "60%", zIndex: "10", left: "420px" }}
        >
          <label htmlFor="img" className="form-label">
            Gambar: <br />
            <input
              type="file"
              id="img"
              className="form-input"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </label>
          <label htmlFor="model" className="form-label">
            Model: <br />
            <input
              type="text"
              id="model"
              className="form-input"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </label>
          <label htmlFor="brand" className="form-label">
            Brand: <br />
            <input
              type="text"
              id="brand"
              className="form-input"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>
          <label htmlFor="year" className="form-label">
            Nama Mobil: <br />
            <input
              type="text"
              id="carName"
              className="form-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label htmlFor="price" className="form-label">
            Harga: <br />
            <input
              type="text"
              id="price"
              className="form-input"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </label>
          <label htmlFor="capacity" className="form-label">
            Kapasitas: <br />
            <select
              id="capacity"
              style={{ width: "400px" }}
              className="form-select"
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
            >
              <option value="4">4 Seats</option>
              <option value="5">5 Seats</option>
              <option value="6">6 Seats</option>
            </select>
          </label>
          <label htmlFor="fuel" className="form-label">
            Fuel: <br />
            <input
              type="text"
              id="fuel"
              className="form-input"
              value={plat}
              onChange={(e) => setPlat(e.target.value)}
            />
          </label>
          <label htmlFor="plat" className="form-label">
            Plat Nomor: <br />
            <input
              type="text"
              id="plat"
              className="form-input"
              value={bpkb}
              onChange={(e) => setBpkb(e.target.value)}
            />
          </label>
          <div className="form-buttons">
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
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
          </div>
        </form>
      )}
      {!showForm && (
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleButtonClick}
          >
            add
          </button>
        </div>
      )}
    </div>
  );
};

export default CarForm;
