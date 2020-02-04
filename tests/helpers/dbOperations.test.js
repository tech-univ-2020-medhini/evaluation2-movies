const dbOps = require('../../src/helpers/dbOperations');
const db  = require('../../models/index');


describe('The db operations', () => {
	const jsonMovies = {'movies':[{'id':'6638453965','name':'The Shawshank Redemption','genres':[2,4]}]};
	const jsonGenres = {'genres':[{'name':'Crime','id':1},{'name':'Mystery','id':2},{'name':'Thriller','id':3},{'name':'Romance','id':4},{'name':'Drama','id':5},{'name':'Sci-fi','id':6}]};
	const jsonActors = {'actors':[{'name':'Brad Pitt','movies':['7533474498','1393797017','6621531523']}]};
	describe('The insert movies function',() => {
		it('Should add movieid and moviename fetched from the api into the db', async() => {
			//const jsonGenres = {'genres':[{'name':'Crime','id':1},{'name':'Mystery','id':2},{'name':'Thriller','id':3},{'name':'Romance','id':4},{'name':'Drama','id':5},{'name':'Sci-fi','id':6}]};
			const mockDb = jest.spyOn(db.Movies, 'create');
			mockDb.mockResolvedValue(true);
			//dbOps.insertGenres = jest.fn();
			await dbOps.insertMovies(jsonMovies,jsonGenres);
			expect(mockDb).toHaveBeenCalledWith({'movieid':'6638453965','moviename':'The Shawshank Redemption', 'genre':[],'actors':[]});
			//expect(dbOps.insertGenres).toHaveBeenCalled();
			mockDb.mockRestore();
			//dbOps.insertGenres.mockReset();
		});
	});
	describe('The insert genres function',() => {
		it('Should add genres fetched from the api into the db', async() => {
			const mockDb = jest.spyOn(db.Movies, 'update');
			mockDb.mockResolvedValue(true);
			await dbOps.insertGenres(jsonGenres,[2,4],'389888');
			expect(mockDb).toHaveBeenCalled();
		});
	});
	describe('The insert actors function',() => {
		it('Should add actors fetched from the api into the db', async() => {
			const mockDb = jest.spyOn(db.Movies, 'update');
			mockDb.mockResolvedValue(true);
			await dbOps.insertActors(jsonActors);
			expect(mockDb).toHaveBeenCalled();
		});
	});
	describe('The get movie function',() => {
		it('Should return the details of the movie by id', async() => {
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
			const mockDb = jest.spyOn(db.Movies, 'findOne');
			mockDb.mockResolvedValue(resolvedValue);
			const result = await dbOps.getMovie('9989888');
			expect(mockDb).toHaveBeenCalled();
			expect(result).toEqual(resolvedValue);
		});
	});
});
