import express, { urlencoded, json } from 'express'

const app = express();

// Importing Routes
import PizzaRoutes from './routes/pizza.routes';
import ToppingRoutes from "./routes/topping.routes";

// settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes
app.use('/pizza', PizzaRoutes);
app.use('/topping', ToppingRoutes);

export default app;