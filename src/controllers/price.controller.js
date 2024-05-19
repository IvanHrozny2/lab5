import { getAllPrices, getPriceById, getPricesByScheduleId, createPrice, updatePrice, deletePrice } from '../services/price.service';

export function getAllPrices(req, res) {
  res.json(getAllPrices());
}

export function getPriceById(req, res) {
  const price = getPriceById(req.params.priceId);
  if (price) {
    res.json(price);
  } else {
    res.status(404).send('Price not found');
  }
}

export function getPricesByScheduleId(req, res) {
  const prices = getPricesByScheduleId(req.params.scheduleId);
  res.json(prices);
}

export function createPrice(req, res) {
  const { scheduleId, amount } = req.body;
  const newPrice = createPrice(scheduleId, amount);
  res.status(201).json(newPrice);
}

export function updatePrice(req, res) {
  const { scheduleId, amount } = req.body;
  const updatedPrice = updatePrice(req.params.priceId, scheduleId, amount);
  if (updatedPrice) {
    res.json(updatedPrice);
  } else {
    res.status(404).send('Price not found');
  }
}

export function deletePrice(req, res) {
  const deletedPrice = deletePrice(req.params.priceId);
  if (deletedPrice) {
    res.status(204).send();
  } else {
    res.status(404).send('Price not found');
  }
}