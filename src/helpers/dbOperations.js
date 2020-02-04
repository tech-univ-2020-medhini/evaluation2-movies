const db = require('../../models/index');

const insertMovies = async(moviesJson, genresJson) => {
	const moviesArray = moviesJson.movies;
	moviesArray.forEach(async(element) => {
		console.log(element.id);
		const jsonAdd = {movieid:element.id,moviename:element.name, genre: [], actors: []};
		await db.Movies.create(jsonAdd);
		await insertGenres(genresJson, element.genres, element.id);
	});  
};

const insertGenres = async(genresJson, genreArray, id) => {
	const genresApiArray = genresJson.genres;
	genreArray.forEach(async(element) => {
		genresApiArray.forEach(async(genreObj) => {
			if(genreObj.id === element)
				db.Movies.update({'genre': db.sequelize.fn('array_append', db.sequelize.col('genre'), genreObj.name)},{ where: { movieid :  id} });

		});
	});
    
};
const insertActors = async(actorsJson) => {
	const actorsArray = actorsJson.actors;
	actorsArray.forEach(async(actorsObj) => {
		const movieArray = actorsObj.movies;
		movieArray.forEach(async(movie) => {
			db.Movies.update({'actors': db.sequelize.fn('array_append', db.sequelize.col('actors'), actorsObj.name)},{ where: { movieid :  movie} });
		});
		
	});
};
const getMovie = async(id) => {
	const response = await db.Movies.findOne({
		raw:true,
		where: {
			movieid: id,
		}
	});
	return response;
};
module.exports = {insertMovies, insertGenres, insertActors, getMovie};