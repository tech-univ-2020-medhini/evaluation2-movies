const getHandler = require('../handlers/updateMovies');
const routes = [{path: '/updateMovies', method: 'GET', handler: getHandler }];

module.exports = routes;