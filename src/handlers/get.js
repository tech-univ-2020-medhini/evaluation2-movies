const dbOperations = require('../helpers/dbOperations');

const get = async(request, h) => {
	try{
		return h.response().code(200);
	} catch(err){
		return h.response(err.message).code(500);
	}
};

module.exports = get;