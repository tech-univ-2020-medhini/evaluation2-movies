const putHandler = require('../handlers/putMovie');
//const schemas = require('../schemas/index');
const routes = [{path: '/movies', method: 'PUT', handler : putHandler }];

module.exports = routes;