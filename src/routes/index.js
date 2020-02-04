const updateMovies = require('./updateMovies');
const getDetails = require('./getDetails');
const putMovie = require('./postMovie');

const routes = [...updateMovies,...getDetails,...putMovie];
module.exports = routes;