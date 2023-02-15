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

        await Band.create({ name: "Coldplay", genre: "Alternative"})
        const foundBand = await Band.findAll()

        expect(foundBand.length).toEqual(1)
        
    })

    test('add showCount property to Band', async () => {
        // TODO - test creating a band
        
        await Band.create({ name: "Calvin Harris", genre: "Dance", showCount: 1})
        const foundBand = await Band.findByPk(2)
        
        expect(foundBand.dataValues.showCount).toEqual(1)

    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician

        await Musician.create({ name: "Chris Martin", instrument: "Piano"})

        const foundMusician = await Musician.findAll()

        expect(foundMusician[0].name).toBe("Chris Martin");
        expect(foundMusician[0].instrument).toBe("Piano");
    })

    test('can update a Musician', async () => {
        // TODO - test creating a musician

        await Musician.update({name: "Jimmy Hendrix", instrument: "Guitar"}, 
        {where: {name: "Chris Martin", instrument: "Piano"}})

        const foundMusician = await Musician.findAll()

        expect(foundMusician[0].name).toBe("Jimmy Hendrix");
        expect(foundMusician[0].instrument).toBe("Guitar");
    })

    test('can delete a Musician', async () => {
        // TODO - test creating a musician

        const newMusician = await Musician.create({ name: "Beyonce", instrument: "voice"})
        
        await newMusician.destroy()

        const foundMusician = await Musician.findAll()
        
        expect(foundMusician.length).toEqual(1)
    })
})