import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes';
import orderRoutes from './routes/order.routes';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

export default app;
