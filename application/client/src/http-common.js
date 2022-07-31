import axios from 'axios';
export default axios.create({
<<<<<<< HEAD
	baseURL: 'http://ec2-54-193-53-30.us-west-1.compute.amazonaws.com:5000/api/',
=======
	baseURL: 'http://localhost:1234/api',
	// baseURL:
	// 	'http://ec2-54-193-53-30.us-west-1.compute.amazonaws.com:5000/api/',
>>>>>>> backend
	headers: {
		'Content-type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});
