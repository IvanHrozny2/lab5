import { getAllTours, getTourById, createTour, updateTour, deleteTour } from '../services/tour.service';

export function getAllTours(req, res) {
  res.json(getAllTours());
}

export function getTourById(req, res) {
  const tour = getTourById(req.params.tourId);
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).send('Tour not found');
  }
}

export function createTour(req, res) {
  const { name } = req.body;
  const newTour = createTour(name);
  res.status(201).json(newTour);
}

export function updateTour(req, res) {
  const { name } = req.body;
  const updatedTour = updateTour(req.params.tourId, name);
  if (updatedTour) {
    res.json(updatedTour);
  } else {
    res.status(404).send('Tour not found');
  }
}

export function deleteTour(req, res) {
  const deletedTour = deleteTour(req.params.tourId);
  if (deletedTour) {
    res.status(204).send();
  } else {
    res.status(404).send('Tour not found');
  }
}