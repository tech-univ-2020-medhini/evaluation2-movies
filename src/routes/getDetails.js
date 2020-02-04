const getHandler = require('../handlers/getDetails');
const schemas = require('../schemas/index');
const routes = [{path: '/{id}', method: 'GET', config : {
	handler : getHandler,
	validate : {
		params : schemas.getSchemas
	}
} }];

module.exports = routes;