const get = require('../../src/handlers/get');
const dbOperation = require('../../src/helpers/dbOperations');

describe('The get handler', () => {
	it ('Should return 200', async() => {
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
		const mockDb = jest.spyOn(dbOperation, 'get');
		mockDb.mockResolvedValue();
		await get(mockReq,mockH);
		mockDb.mockRestore();

	});
	
	
	it ('Should return 500 ', async() => {
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
		const mockDb = jest.spyOn(dbOperation, 'get');
		mockDb.mockRejectedValue(new Error());
		await get(mockReq,mockH);
		mockDb.mockRestore();
	});
});