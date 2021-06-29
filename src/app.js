import express from 'express';
import ipRouter from './routes/ipTrace.js';
import healthRouter from './routes/health.js';
import mongoose from 'mongoose';

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', ipRouter);
app.use('/', healthRouter);

mongoose.connect('mongodb://localhost:27017/IpTrace', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.listen(port);
