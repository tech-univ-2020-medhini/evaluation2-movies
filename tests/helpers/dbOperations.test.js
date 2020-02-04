const {insertMovies} = require('../../src/helpers/dbOperations');
const db  = require('../../models/index');
describe('The db operations', () => {
	describe('The insert movies function',() => {
		it('Should add movieid and moviename fetched from the api into the db', async() => {
			const jsonObj = {'movies':[{'id':'6638453965','name':'The Shawshank Redemption','genres':[2,4]}]};
			const mockDb = jest.spyOn(db.Movies, 'create');
			mockDb.mockResolvedValue(true);
			await insertMovies(jsonObj);
			expect(mockDb).toHaveBeenCalledWith({'moviesid':'6638453965','moviesname':'The Shawshank Redemption'});
			mockDb.mockRestore();
		});
	});
	xdescribe('The insert genres function',() => {
		it('Should add genres fetched from the api into the db', async() => {
			const mockDb = jest.spyOn(db.Movies, 'create');
			mockDb.mockResolvedValue(true);
			await insertGenres();
			mockDb.mockRestore();
		});
	});
	xdescribe('The insert actors function',() => {
		it('Should add actors fetched from the api into the db', async() => {
			const mockDb = jest.spyOn(db.Movies, 'create');
			mockDb.mockResolvedValue(true);
			await insertActors();
			mockDb.mockRestore();
		});
	});
});
