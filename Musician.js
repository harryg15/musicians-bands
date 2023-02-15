const {Sequelize, sequelizeCon} = require('./db');

// TODO - define the Musician model
let Musician = sequelizeCon.define({
    name: Sequelize.STRING,
    instrument: Sequelize.STRING
});

module.exports = {
    Musician
};