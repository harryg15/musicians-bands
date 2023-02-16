const {Sequelize, sequelizeCon} = require('./db');

// TODO - define the Band model
let Song = sequelizeCon.define("song", {
    title: Sequelize.STRING,
    year: Sequelize.INTEGER
});

module.exports = {
    Song
};