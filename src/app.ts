import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import users_router from './routes/userRoutes.js';

dotenv.config();
const PORT = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL || '';

export const app = express();
app.use(express.json());

/**
 * La app hace uso del router: user_router para las gestiones de los usuarios a través de la ruta /users
 */
app.use('/users', users_router);

/** 
 * Conectarse al servidor MONGODB
*/
mongoose.connect(MONGODB_URL)
  .then(() => {
  console.log('Connection to MongoDB server established');
  

  app.listen(PORT, () => {
      console.log(`Servidor iniciado en puerto ${PORT}`);
  })

}).catch(() => {
  console.log('Unable to connect to MongoDB server');
});

export default app;