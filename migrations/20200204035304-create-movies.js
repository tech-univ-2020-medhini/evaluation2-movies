'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Movies', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			movieid: {
				type: Sequelize.STRING
			},
			moviename: {
				type: Sequelize.STRING
			},
			genre: {
				type: Sequelize.ARRAY(Sequelize.STRING)
			},
			actors: {
				type: Sequelize.ARRAY(Sequelize.STRING)
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Movies');
	}
};