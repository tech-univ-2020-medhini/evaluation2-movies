const updateMovies = require('../../src/handlers/updateMovies');
const dbOperation = require('../../src/helpers/dbOperations');
const axios = require('axios').default;

describe('The get handler', () => {
	//const jsonMovies = {'movies':[{'id':'6638453965','name':'The Shawshank Redemption','genres':[2,4]}]};
	//const jsonGenres = {'genres':[{'name':'Crime','id':1},{'name':'Mystery','id':2},{'name':'Thriller','id':3},{'name':'Romance','id':4},{'name':'Drama','id':5},{'name':'Sci-fi','id':6}]};
	//const jsonActors = {'actors':[{'name':'Brad Pitt','movies':['7533474498','1393797017','6621531523']}]};
	it ('Should return 200 if the api is read correctly and added into the db', async() => {
		const mockReq = {
			params: {
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		const mockMovies= jest.spyOn(dbOperation, 'insertMovies');
		mockMovies.mockResolvedValue(true);
		const mockGenre = jest.spyOn(dbOperation, 'insertGenres');
		mockGenre.mockResolvedValue(true);
		const mockActors = jest.spyOn(dbOperation, 'insertActors');
		mockActors.mockResolvedValue(true);
		const mockAxios = jest.spyOn(axios, 'get');
		mockAxios.mockResolvedValue(true);

		await updateMovies(mockReq,mockH);
		
		expect(mockAxios).toHaveBeenCalledWith('https://stormy-plains-72807.herokuapp.com/movies');
		expect(mockAxios).toHaveBeenCalledWith('https://stormy-plains-72807.herokuapp.com/genres');
		expect(mockAxios).toHaveBeenCalledWith('https://stormy-plains-72807.herokuapp.com/actors');
		expect(mockMovies).toHaveBeenCalled();
		expect(mockActors).toHaveBeenCalled();
		expect(mockH.response).toHaveBeenCalledWith('The movie data has been added');
		expect(mockCode).toHaveBeenCalledWith(200);
		mockMovies.mockRestore();
		mockGenre.mockRestore();
		mockActors.mockRestore();
		mockAxios.mockRestore();

	});
	
	
	it ('Should return 500 if error occurs while adding to the db', async() => {
		const mockReq = {
			params: {
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {
					code: mockCode};
			}),
		};
		const mockMovies= jest.spyOn(dbOperation, 'insertMovies');
		mockMovies.mockRejectedValue(new Error('db failed'));
		// const mockGenre = jest.spyOn(dbOperation, 'insertGenres');
		// mockGenre.mockRejectedValue(new Error('db failed'));
		// const mockActors = jest.spyOn(dbOperation, 'insertActors');
		// mockActors.mockRejectedValue(new Error('db failed'));
		const mockAxios = jest.spyOn(axios, 'get');
		mockAxios.mockResolvedValue(true);


		await updateMovies(mockReq,mockH);

		expect(mockAxios).toHaveBeenCalledWith('https://stormy-plains-72807.herokuapp.com/movies');
		expect(mockAxios).toHaveBeenCalledWith('https://stormy-plains-72807.herokuapp.com/genres');
		expect(mockAxios).toHaveBeenCalledWith('https://stormy-plains-72807.herokuapp.com/actors');
		expect(mockMovies).toHaveBeenCalled();
		expect(mockH.response).toHaveBeenCalledWith('db failed');
		expect(mockCode).toHaveBeenCalledWith(500);

		mockMovies.mockRestore();
		// mockGenre.mockRestore();
		// mockActors.mockRestore();
		mockAxios.mockRestore();

	});
});