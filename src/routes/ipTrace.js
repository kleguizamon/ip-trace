import express from 'express';
import IpController from '../controllers/ipController.js';
import ApiService from '../services/apiService.js';
import DBClient from '../db/queryManager.js';

const IpInstances = new IpController(new ApiService(new DBClient()));
const router = express.Router();

router.get('/stats', (req, res, next) => {
	//
});

router.post('/trace', (req, res, next) => {
	IpInstances.getIpTrace(req, res);
});

export default router;
