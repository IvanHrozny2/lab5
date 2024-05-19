const MemoryRepository = require('../repositories/memory.repository');
const Tour = require('../models/tour.model');

class TourService {
  constructor() {
    this.repository = new MemoryRepository();
  }

  getAllTours() {
    return this.repository.getAll();
  }

  getTourById(id) {
    return this.repository.getById(id);
  }

  createTour(name) {
    const newTour = new Tour(Date.now().toString(), name);
    return this.repository.create(newTour);
  }

  updateTour(id, name) {
    return this.repository.update(id, { name });
  }

  deleteTour(id) {
    return this.repository.delete(id);
  }
}

module.exports = new TourService();