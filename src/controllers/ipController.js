export default class IpController {
	constructor(apiService) {
		this.apiService = apiService;
	}

	async getIpTrace(req, res) {
		const { ip } = req.body;
		if (ip) {
			try {
				const resIpTracking = await this.apiService.ipTracking(ip);
				const trace = {
					ip,
					...resIpTracking,
				};
				res.status(200).json(trace);
			} catch (err) {
				console.log(err);
				res.status(500).json('error');
			}
		} else {
			res.status(404).json('The field "ip" is required!');
		}
	}
}
