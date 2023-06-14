import Testimonial from "../models/testi_model.js";

// Mendapatkan semua testimoni
export const getAllTestimonials = async (req, res) => {
    try {
      const testimonials = await Testimonial.findAll();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan saat mendapatkan testimoni.' });
    }
  };
  
  // Mendapatkan testimoni berdasarkan ID
  export const getTestimonialById = async (req, res) => {
    try {
      const testimonial = await Testimonial.findByPk(req.params.id);
      if (testimonial) {
        res.json(testimonial);
      } else {
        res.status(404).json({ message: 'Testimoni tidak ditemukan.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan saat mendapatkan testimoni.' });
    }
  };
  
  // Membuat testimoni baru
  export const createTestimonial = async (req, res) => {
    try {
      const { testi_message } = req.body;
      const testimonial = await Testimonial.create({ testi_message });
      res.status(201).json(testimonial);
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan saat membuat testimoni.' });
    }
  };
  
  // Memperbarui testimoni berdasarkan ID
  export const updateTestimonial = async (req, res) => {
    try {
      const { testi_message } = req.body;
      const testimonial = await Testimonial.findByPk(req.params.id);
      if (testimonial) {
        testimonial.testi_message = testi_message;
        await testimonial.save();
        res.json({ message: 'Testimonial berhasil diperbarui.' });
      } else {
        res.status(404).json({ message: 'Testimoni tidak ditemukan.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui testimoni.' });
    }
  };
  
  
  // Menghapus testimoni berdasarkan ID
  export const deleteTestimonial = async (req, res) => {
    try {
      const testimonial = await Testimonial.findByPk(req.params.id);
      if (testimonial) {
        await testimonial.destroy();
        res.json({ message: 'Testimoni berhasil dihapus.' });
      } else {
        res.status(404).json({ message: 'Testimoni tidak ditemukan.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan saat menghapus testimoni.' });
    }
  };
  