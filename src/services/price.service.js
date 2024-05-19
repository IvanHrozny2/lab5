const MemoryRepository = require('../repositories/memory.repository');
const Price = require('../models/price.model');

class PriceService {
  constructor() {
    this.repository = new MemoryRepository();
  }

  getAllPrices() {
    return this.repository.getAll();
  }

  getPriceById(id) {
    return this.repository.getById(id);
  }

  getPricesByScheduleId(scheduleId) {
    return this.repository.getAll().filter(price => price.scheduleId === scheduleId);
  }

  createPrice(scheduleId, amount) {
    const newPrice = new Price(Date.now().toString(), scheduleId, amount);
    return this.repository.create(newPrice);
  }

  updatePrice(id, scheduleId, amount) {
    return this.repository.update(id, { scheduleId, amount });
  }

  deletePrice(id) {
    return this.repository.delete(id);
  }
}

module.exports = new PriceService();