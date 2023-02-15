const {sequelizeCon} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelizeCon.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band

        const createBand = await Band.create({ name: "Coldplay", genre: "Alternative"})
        const foundBand = await Band.findAll()

        expect(foundBand[0].name).toBe("Coldplay");
        expect(foundBand[0].genre).toBe("Alternative");
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const createMusician = await Musician.create({ name: "Chirs Martin", instrument: "Piano"})
        const foundMusician = await Musician.findAll()

        expect(foundMusician[0].name).toBe("Chirs Martin");
        expect(foundMusician[0].instrument).toBe("Piano");
    })
})