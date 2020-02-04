const getHandler = require('../handlers/fillDatabase');
const routes = [{path: '/fillDatabase', method: 'GET', handler: getHandler }];

module.exports = routes;