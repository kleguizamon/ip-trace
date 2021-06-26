const express = require('express'),
	app = express(),
	port = 3000,
	ipRouter = require('./routes/ipTrace'),
	healthRouter = require('./routes/health');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', ipRouter);
app.use('/', healthRouter);

module.exports = app.listen(port);
