import express, { request } from 'express';

import { Car } from '../models/carModel.js';

const router = express.Router();

//Route to Save a new Car
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.ownerName ||
      !request.body.make ||
      !request.body.model ||
      !request.body.issue ||
      !request.body.carYear||
      !request.body.repairPrice
    ) {
      return response.status(400).send({
        message: 'send all required fields: ownerName, make, model, issue, carYear and repairPrice',
      });
    }
    const newCar = {
      ownerName: request.body.ownerName,
      make: request.body.make,
      model: request.body.model,
      issue: request.body.issue,
      carYear: request.body.carYear,
      repairPrice: request.body.repairPrice,
    };
    const car = await Car.create(newCar);

    return response.status(201).send(car);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get All Cars frm database
router.get('/', async (request, response) => {
  try {
    const cars = await Car.find({});

    return response.status(200).json({
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get One Car frm database
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const car = await Car.findById({ _id: id });

    return response.status(200).json({ car });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to update Car
router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Car.findByIdAndUpdate({ _id: id });

    if (!result) {
      return response.status(404).json({ message: 'Car not found' });
    }

    return response.status(200).json({ message: 'Car updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for delete a car
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Car.findByIdAndDelete({ _id: id });

    if (!result) {
      return response.status(404).json({ message: 'Car not found' });
    }

    return response.status(200).send({ message: 'Car deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
