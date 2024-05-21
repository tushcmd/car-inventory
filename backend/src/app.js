import express, { request, response } from 'express';
import carRoutes from './routes/carRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS Policy
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('successful');
});

app.use('/cars', carRoutes);



export default app;
