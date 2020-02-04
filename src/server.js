const Hapi = require('@hapi/hapi');
const routes = require('./routes/index');
const Joi = require('@hapi/joi');

const buildServer = async () => {
	const server = Hapi.Server({
		host: 'localhost',
		port: 8080,
	});
	server.route(routes);
	await server.validator(Joi);
	return server;
};

module.exports = buildServer;