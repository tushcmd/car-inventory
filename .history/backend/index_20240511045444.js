import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config';
import mongoose  from 'mongoose'
import { Car } from './models/carModel'
import carRoutes from './routes/carRoutes'