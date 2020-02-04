const updateMovies = require('./updateMovies');
const getDetails = require('./getDetails');

const routes = [...updateMovies,...getDetails];
module.exports = routes;