const db = require('../../models/index');

const insertMovies = async(moviesJson) => {
	const moviesArray = moviesJson.movies;
	moviesArray.forEach(element => {
		const jsonAdd = {moviesid:element.id,moviesname:element.name};
		db.Movies.create(jsonAdd);
	});    
};

module.exports = {insertMovies};