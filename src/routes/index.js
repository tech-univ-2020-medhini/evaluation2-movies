const fillDatabase = require('./fillDatabase');
const getDetails = require('./getDetails');
const putMovie = require('./putMovie');

const routes = [...fillDatabase,...getDetails,...putMovie];
module.exports = routes;