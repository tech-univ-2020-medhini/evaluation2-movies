const db = require('../../models/index');

const insertMovies = async(moviesJson, genresJson) => {
	const moviesArray = moviesJson.movies;
	moviesArray.forEach(async(element) => {
		const jsonAdd = {moviesid:element.id,moviesname:element.name};
		const result = await db.Movies.create(jsonAdd);
		await insertGenres(genresJson, result, element.genres);
		console.log(result);
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
	await model.save();
    
};

module.exports = {insertMovies, insertGenres};