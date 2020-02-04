const updateMovies = require('./updateMovies');
const getDetails = require('./getDetails');
const putMovie = require('./putMovie');

const routes = [...updateMovies,...getDetails,...putMovie];
module.exports = routes;