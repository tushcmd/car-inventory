import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config';
import mongoose from 'mongoose';
import { Car } from './models/carModel';
import carRoutes from './routes/carRoutes';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);
