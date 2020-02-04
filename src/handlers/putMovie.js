const dbOperations = require('../helpers/dbOperations');


const putMovie = async(request, h) => {
	try{
		//console.log('in handler');
		await dbOperations.putMovie(request.payload);
		return h.response('Added movie').code(200);
	} catch(err){
		return h.response(err.message).code(500);
	}
};
module.exports = putMovie;