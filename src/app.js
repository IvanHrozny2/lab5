import express from 'express';
import { json } from 'body-parser';
import tourRouter from './routes/tour.router';
import scheduleRouter from './routes/schedule.router';
import priceRouter from './routes/price.router';

const app = express();
const PORT = 4000;

app.use(json());

app.use('/tours', tourRouter);
app.use('/schedules', scheduleRouter);
app.use('/prices', priceRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});