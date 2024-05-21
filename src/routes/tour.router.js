import { Router } from 'express';
import { getAllTours, getTourById, createTour, updateTour, deleteTour } from '../controllers/tour.controller';

const router = Router();

router.get('/', getAllTours);
router.get('/:tourId', getTourById);
router.post('/', createTour);
router.put('/:tourId', updateTour);
router.delete('/:tourId', deleteTour);

export default router;