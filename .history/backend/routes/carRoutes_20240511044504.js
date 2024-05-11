import express, { request } from 'express';

import { Car } from '../models/carModel';

const router = express.Router();

//Route to Save a new Car
router.post('/', async (request, response) => {
  try {
    if (
      !request.owner ||
      !request.body.make ||
      !request.body.model ||
      !request.body.carYear
    ) {
      return response.status(400).send({
        message: 'send all required fields: owner, make, model, carYear',
      });
    }
    const newCar = {
      owner: request.body.owner,
      make: request.body.make,
      model: request.body.model,
      carYear: request.body.carYear,
    };
    const car = await Car.create(newCar);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get All Cars frm database
router.get('/', async (request, response) => {
  try {
    const books = await Car.find({});

    return response.status(200).json({
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get One Book frm database
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Car.findById({ _id: id });

    return response.status(200).json({ car });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
