const getHandler = require('../handlers/get');
const schemas = require('../schemas/index');
const routes = [{path: '/{id}', method: 'GET',  config: {
	handler: getHandler,
	validate: {
		params: schemas.get,
	},  
},
}];

module.exports = routes;