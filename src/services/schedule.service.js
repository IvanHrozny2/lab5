const MemoryRepository = require('../repositories/memory.repository');
const Schedule = require('../models/schedule.model');

class ScheduleService {
  constructor() {
    this.repository = new MemoryRepository();
  }

  getAllSchedules() {
    return this.repository.getAll();
  }

  getScheduleById(id) {
    return this.repository.getById(id);
}

getSchedulesByTourId(tourId) {
  return this.repository.getAll().filter(schedule => schedule.tourId === tourId);
}

createSchedule(tourId, date) {
  const newSchedule = new Schedule(Date.now().toString(), tourId, date);
  return this.repository.create(newSchedule);
}

updateSchedule(id, tourId, date) {
  return this.repository.update(id, { tourId, date });
}

deleteSchedule(id) {
  return this.repository.delete(id);
}
}

module.exports = new ScheduleService();