import { Router } from 'express';
import { getAllSchedules, getScheduleById, getSchedulesByTourId, createSchedule, updateSchedule, deleteSchedule } from '../controllers/schedule.controller';

const router = Router();

router.get('/', getAllSchedules);
router.get('/:scheduleId', getScheduleById);
router.get('/tour/:tourId', getSchedulesByTourId);
router.post('/', createSchedule);
router.put('/:scheduleId', updateSchedule);
router.delete('/:scheduleId', deleteSchedule);

export default router;