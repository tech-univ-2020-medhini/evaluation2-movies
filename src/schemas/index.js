const Joi = require('@hapi/joi');

const getSchema = Joi.object({
	id: Joi.string().required(),
});


module.exports = {getSchema};