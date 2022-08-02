const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: '/api/http://ec2-54-193-53-30.us-west-1.compute.amazonaws.com:5000/api/user/',
			changeOrigin: true,
		})
	);
};