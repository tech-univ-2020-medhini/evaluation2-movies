'use strict';
module.exports = (sequelize, DataTypes) => {
	const Movies = sequelize.define('Movies', {
		movieid: DataTypes.STRING,
		moviename: DataTypes.STRING,
		genre: DataTypes.ARRAY(DataTypes.STRING),
		actors: DataTypes.ARRAY(DataTypes.STRING)
	}, {});
	Movies.associate = function(models) {
		// associations can be defined here
	};
	return Movies;
};