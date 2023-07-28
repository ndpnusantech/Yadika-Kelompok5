import express from 'express';
const router = express.Router();
import { getAllTestimonials,getTestimonialById,updateTestimonial,deleteTestimonial,createTestimonial } from '../controllers/testi_controller.js';

router.get('/testi', getAllTestimonials);
router.get('/testi/:id', getTestimonialById);
router.post('/testi', createTestimonial);
router.patch('/testi/:id', updateTestimonial);
router.delete('/testi/:id', deleteTestimonial);

export default router
