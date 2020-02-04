const getHandler = require('../handlers/updateMovies');
const getSchemas = require('../schemas/index');
const routes = [{path: '/updateMovies', method: 'GET', handler: getHandler }];

module.exports = routes;