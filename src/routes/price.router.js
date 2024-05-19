import { Router } from 'express';
import { getAllPrices, getPriceById, getPricesByScheduleId, createPrice, updatePrice, deletePrice } from '../controllers/price.controller';

const router = Router();

router.get('/', getAllPrices);
router.get('/:priceId', getPriceById);
router.get('/schedule/:scheduleId', getPricesByScheduleId);
router.post('/', createPrice);
router.put('/:priceId', updatePrice);
router.delete('/:priceId', deletePrice);

export default router;