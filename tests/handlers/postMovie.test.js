const postMovie = require('../../src/handlers/postMovie');
const dbOperation = require('../../src/helpers/dbOperations');

describe('The post deatails handler', () => {
	it ('Should save the payload onto the database', async() => {
		const newMovie = {
			'moviename': 'Seven',
			'movieid':'789088',
			'genre': [
				'Mystery',
				'Thriller',
				'Crime'
			],
			'actors': [
				'Brad Pitt',
				'Morgan Freeman'
			]
		};
		const mockReq = {
			payload: newMovie,
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		
		const mockDetails= jest.spyOn(dbOperation, 'postMovie');
		mockDetails.mockResolvedValue(true);
		await postMovie(mockReq, mockH);
        
		expect(mockDetails).toHaveBeenCalledWith(newMovie);
		expect(mockH.response).toHaveBeenCalledWith('Added movie');
		expect(mockCode).toHaveBeenCalledWith(200);
		mockDetails.mockRestore();
	});
	it ('Should return 500 if the db operation fails', async() => {
		const newMovie = {
			'name': 'Seven',
			'genres': [
				'Mystery',
				'Thriller',
				'Crime'
			],
			'actors': [
				'Brad Pitt',
				'Morgan Freeman'
			]
		};
		const mockReq = {
			payload: newMovie
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		
		const mockDetails= jest.spyOn(dbOperation, 'postMovie');
		mockDetails.mockRejectedValue(new Error('Internal server error'));
		await postMovie(mockReq, mockH);
        
		expect(mockDetails).toHaveBeenCalledWith(newMovie);
		expect(mockH.response).toHaveBeenCalledWith('Internal server error');
		expect(mockCode).toHaveBeenCalledWith(500);
		mockDetails.mockRestore();
	});
	
});