const Joi = require('@hapi/joi');

const getSchema = Joi.object({
	id: Joi.string().required(),
});

const putSchema = Joi.object({
	//movieid: Joi.string().required(),
	//moviename: Joi.string(),
	//genre: Joi.array(),
	//actors: Joi.array(),
});


module.exports = getSchema, putSchema;