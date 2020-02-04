const putHandler = require('../handlers/postMovie');
//const schemas = require('../schemas/index');
const routes = [{path: '/putMovie', method: 'PUT', handler : putHandler }];

module.exports = routes;