import express from 'express';
import ipRouter from './routes/ipTrace.js';
import healthRouter from './routes/health.js';

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', ipRouter);
app.use('/', healthRouter);

app.listen(port);
