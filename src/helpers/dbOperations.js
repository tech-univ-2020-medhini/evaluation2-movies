const db = require('../../models/index');

const insertMovies = async(moviesJson, genresJson) => {
	const moviesArray = moviesJson.movies;
	moviesArray.forEach(async(element) => {
		const jsonAdd = {moviesid:element.id,moviesname:element.name};
		const model = await db.Movies.create(jsonAdd);
		await insertGenres(genresJson, model, element.genres);
	});  
};

const insertGenres = async(genresJson, model, genreArray) => {
	const genresApiArray = genresJson.genres;
	genreArray.forEach(async(element) => {
		genresApiArray.forEach(async(objArrayElement) => {
			if (objArrayElement.id === element){
				model.genre.push(objArrayElement.name);
			}
		});
	});
	return await model.save();
    
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
module.exports = {insertMovies, insertGenres, insertActors};