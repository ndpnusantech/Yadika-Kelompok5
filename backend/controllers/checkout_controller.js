import Checkout from "../models/checkout_model.js";
import CarsProf from "../models/cars_porf_model.js";

export const getCheckouts = async (req, res) => {
  try {
    // Include the CarsProf model while fetching the checkouts
    const response = await Checkout.findAll({
      include: [
        {
          model: CarsProf,
          as: 'mobil_profile', // This should match the association alias in cars_prof_model.js
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

  export const getCheckoutById = async (req, res) => {
    try {
      const response = await Checkout.findOne({
        where: {
          check_id: req.params.id,
        },
      });

      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "Checkout not found" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  export const createCheckout = async (req, res) => {
    try {
      // Ambil data dari request body
      const { profilMobil_id, namaAnda, tanggalPinjam, tanggalKembali, totalHarga, uangMuka, pDana, pDebit, pOvo, buktiPembayaran, diskon, statusPemesanan } = req.body;
      
      // Validasi data yang dibutuhkan
      const missingFields = [];
      if (!profilMobil_id) missingFields.push("profilMobil_id");
      if (!namaAnda) missingFields.push("namaAnda");
      if (!tanggalPinjam) missingFields.push("tanggalPinjam");
      if (!tanggalKembali) missingFields.push("tanggalKembali");
      // Lanjutkan dengan memeriksa field lainnya sesuai kebutuhan

      // Cek jika ada field yang kosong
      if (missingFields.length > 0) {
        res.status(400).json({ error: `Missing required fields: ${missingFields.join(", ")}` });
      } else {
        // Simpan data ke database menggunakan model Checkout
        await Checkout.create(req.body);
        res.status(201).json({ msg: "Checkout created" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  export const updateCheckout = async (req, res) => {
    try {
      // Ambil data dari request body
      const { profilMobil_id, namaAnda, tanggalPinjam, tanggalKembali, totalHarga, uangMuka, pDana, pDebit, pOvo, buktiPembayaran, diskon, statusPemesanan } = req.body;

      // Validasi data yang dibutuhkan
      const missingFields = [];
      if (!profilMobil_id) missingFields.push("profilMobil_id");
      if (!namaAnda) missingFields.push("namaAnda");
      if (!tanggalPinjam) missingFields.push("tanggalPinjam");
      if (!tanggalKembali) missingFields.push("tanggalKembali");
      // Lanjutkan dengan memeriksa field lainnya sesuai kebutuhan

      // Cek jika ada field yang kosong
      if (missingFields.length > 0) {
        res.status(400).json({ error: `Missing required fields: ${missingFields.join(", ")}` });
      } else {
        // Cari data Checkout berdasarkan ID
        const checkout = await Checkout.findOne({
          where: {
            check_id: req.params.id,
          },
        });

        if (checkout) {
          // Update data Checkout dengan data baru dari request body
          await Checkout.update(req.body, {
            where: {
              check_id: req.params.id,
            },
          });
          res.status(200).json({ msg: "Checkout updated" });
        } else {
          res.status(404).json({ error: "Checkout not found" });
        }
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  export const deleteCheckout = async (req, res) => {
    try {
      // Cari data Checkout berdasarkan ID
      const checkout = await Checkout.findOne({
        where: {
          check_id: req.params.id,
        },
      });

      if (checkout) {
        await Checkout.destroy({
          where: {
            check_id: req.params.id,
          },
        });
        res.status(200).json({ msg: "Checkout deleted" });
      } else {
        res.status(404).json({ error: "Checkout not found" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
