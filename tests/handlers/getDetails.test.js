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

});