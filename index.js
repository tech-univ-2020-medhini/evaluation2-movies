const buildServer = require('./src/server');

const start = async () => {
	const server = await buildServer();
	await server.start((err) => {
		if (err) {
			throw err;
		}
	});
};
start();
console.log('Server started');