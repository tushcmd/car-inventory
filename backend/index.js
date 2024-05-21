import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import app from './src/app.js'

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to database`);
    app.listen(PORT, () => {
      console.log(`App is listening to: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });