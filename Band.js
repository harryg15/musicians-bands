const {Sequelize, sequelizeCon} = require('./db');

// TODO - define the Band model
let Band = sequelizeCon.define("band", {
    name: Sequelize.STRING,
    genre: Sequelize.STRING
});

module.exports = {
    Band
};