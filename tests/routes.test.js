const buildServer = require('../src/server');
const db = require('../models/index');

describe('The server ', () => {
	let server;

	beforeEach(async () => {
		server = await buildServer();
		await server.initialize();
		return server;
	});

	afterEach(async () => {
		await server.stop();
	});

	it('Should return 200', async (done) =>{
		const injectOptions = {
			method: 'GET',
			url: '/',
		};
		// const mockDb = jest.spyOn();
		// mockDb.mockResolvedValue();
		const response = await server.inject(injectOptions);
		// expect(response.statusCode).toEqual();
		done();
	});
});
