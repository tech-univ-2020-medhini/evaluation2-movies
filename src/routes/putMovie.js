const putHandler = require('../handlers/putMovie');
const schemas = require('../schemas/index');
const routes = [{path: '/movies', method: 'PUT',  config : {
	handler : putHandler ,
	validate: {
		payload : schemas.putSchema
	}
}}];

module.exports = routes;