import axios from 'axios';
export default axios.create({
	// baseURL: 'http://localhost:1234/api',
	baseURL:
		'http://ec2-54-193-53-30.us-west-1.compute.amazonaws.com:5000/api/',
	headers: {
		'Content-type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Max-Age': 3000,
	},
});
