import { getAllSchedules, getScheduleById, getSchedulesByTourId, createSchedule, updateSchedule, deleteSchedule } from '../services/schedule.service';

export function getAllSchedules(req, res) {
  res.json(getAllSchedules());
}

export function getScheduleById(req, res) {
  const schedule = getScheduleById(req.params.scheduleId);
  if (schedule) {
    res.json(schedule);
  } else {
    res.status(404).send('Schedule not found');
  }
}

export function getSchedulesByTourId(req, res) {
  const schedules = getSchedulesByTourId(req.params.tourId);
  res.json(schedules);
}

export function createSchedule(req, res) {
  const { tourId, date } = req.body;
  const newSchedule = createSchedule(tourId, date);
  res.status(201).json(newSchedule);
}

export function updateSchedule(req, res) {
  const { tourId, date } = req.body;
  const updatedSchedule = updateSchedule(req.params.scheduleId, tourId, date);
  if (updatedSchedule) {
    res.json(updatedSchedule);
  } else {
    res.status(404).send('Schedule not found');
  }
}

export function deleteSchedule(req, res) {
  const deletedSchedule = deleteSchedule(req.params.scheduleId);
  if (deletedSchedule) {
    res.status(204).send();
  } else {
    res.status(404).send('Schedule not found');
  }
}