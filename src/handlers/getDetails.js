const dbOperations = require('../helpers/dbOperations');


const getDetails = async(request, h) => {
	try{
		const id = request.params.id;
		const response = await dbOperations.getMovie(id);
		console.log(response);
		return h.response(response).code(200);
	} catch(err){
		return h.response(err.message).code(500);
	}
};
module.exports = getDetails;