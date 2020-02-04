const buildServer = require('../src/server');
const dbOperation = require('../src/helpers/dbOperations');
const axios = require('axios').default;

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

	const resolvedData = {
		'name': 'Pineapple Express',
		'genres': [
			'Comedy',
			'Drama',
		],
		'actors': [
			'Seth Rogen',
		]
	};
	it('Should return 200 when the db fetches data', async (done) =>{
		const injectOptions = {
			method: 'GET',
			url: '/fillDatabase',
		};
		const mockMovies= jest.spyOn(dbOperation, 'insertMovies');
		mockMovies.mockResolvedValue(true);
		const mockGenre = jest.spyOn(dbOperation, 'insertGenres');
		mockGenre.mockResolvedValue(true);
		const mockActors = jest.spyOn(dbOperation, 'insertActors');
		mockActors.mockResolvedValue(true);
		const mockAxios = jest.spyOn(axios, 'get');
		mockAxios.mockResolvedValue(resolvedData);


		const response = await server.inject(injectOptions);
		expect(response.statusCode).toEqual(200);
		done();
	});
	it('Should return 500 when the system fails', async (done) =>{
		const injectOptions = {
			method: 'GET',
			url: '/fillDatabase',
		};
		const mockMovies= jest.spyOn(dbOperation, 'insertMovies');
		mockMovies.mockRejectedValue(new Error('db failed'));
		const mockAxios = jest.spyOn(axios, 'get');
		mockAxios.mockResolvedValue(resolvedData);


		const response = await server.inject(injectOptions);
		expect(response.statusCode).toEqual(500);
		done();
	});
});
