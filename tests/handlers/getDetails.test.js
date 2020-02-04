const getDetails = require('../../src/handlers/getDetails');
const dbOperation = require('../../src/helpers/dbOperations');

describe('The get deatails handler', () => {
	it ('Should return the details of the movie given the id', async() => {
		const mockReq = {
			params: {
				id : 1
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		const resolvedValue = {
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
		const mockDetails= jest.spyOn(dbOperation, 'getMovie');
		mockDetails.mockResolvedValue(resolvedValue);
		await getDetails(mockReq, mockH);
        
		expect(mockDetails).toHaveBeenCalledWith(mockReq.params.id);
		expect(mockH.response).toHaveBeenCalledWith(resolvedValue);
		expect(mockCode).toHaveBeenCalledWith(200);
		mockDetails.mockRestore();
	});
	it ('Should return 500 if the db operation fails', async() => {
		const mockReq = {
			params: {
				id : 1
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		const resolvedValue = {
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
		const mockDetails= jest.spyOn(dbOperation, 'getMovie');
		mockDetails.mockRejectedValue(new Error('Internal server error'));
		await getDetails(mockReq, mockH);
        
		expect(mockDetails).toHaveBeenCalledWith(mockReq.params.id);
		expect(mockH.response).toHaveBeenCalledWith('Internal server error');
		expect(mockCode).toHaveBeenCalledWith(500);
		mockDetails.mockRestore();
	});
	it ('Should return 204 no data if the id is not found', async() => {
		const mockReq = {
			params: {
				id : 1
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		const resolvedValue = {
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
		const mockDetails= jest.spyOn(dbOperation, 'getMovie');
		mockDetails.mockResolvedValue(null);
		await getDetails(mockReq, mockH);
        
		expect(mockDetails).toHaveBeenCalledWith(mockReq.params.id);
		expect(mockH.response).toHaveBeenCalledWith('No data found');
		expect(mockCode).toHaveBeenCalledWith(204);
		mockDetails.mockRestore();
	});

});