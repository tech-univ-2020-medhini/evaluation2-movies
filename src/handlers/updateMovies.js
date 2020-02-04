const dbOperations = require('../helpers/dbOperations');
const axios = require('axios').default;

const updateMovies = async(request, h) => {
	try{
		const moviesJson = await axios.get('https://stormy-plains-72807.herokuapp.com/movies');
		const genresJson = await axios.get('https://stormy-plains-72807.herokuapp.com/genres');
		const actorsJson = await axios.get('https://stormy-plains-72807.herokuapp.com/actors');
		//console.log(moviesJson.data);
		await dbOperations.insertMovies(moviesJson.data, genresJson.data);
		await dbOperations.insertActors(actorsJson.data);
		return h.response('The movie data has been added').code(200);
	} catch(err){
		return h.response(err.message).code(500);
	}
};

module.exports = updateMovies;