import express, { request } from 'express';

import { Car } from '../models/carModel'

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
            })
        }
        const newCar = {
            owner: request.body.owner,
            make: request.body.make,
            model: request.body.model,
            carYear: request.body.carYear,
        }
    }
})