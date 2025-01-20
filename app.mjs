//const express = require('express');

import express from 'express';
import userRoutes from './src/routes/userRoutes.js';
//import errorHandler from './middlewares/errorHandler.js';
import sequelize from './src/config/sequelize.js';

const app = express();
const PORT = 8082;

//Middlerware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
//app.use(errorHandler);

// Start Server
(async () => {
    try {
      await sequelize.sync(); // Sync Sequelize models with DB
      console.log('Database synced successfully');
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
      console.error('Error starting server:', error);
    }
  })();