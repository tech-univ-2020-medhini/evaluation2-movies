const getHandler = require('../handlers/getDetails');
const getSchemas = require('../schemas/index');
const routes = [{path: '/{id}', method: 'GET', config : {
	handler : getHandler,
	validate : {
		params : getSchemas
	}
} }];

module.exports = routes;