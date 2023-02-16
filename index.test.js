const {sequelizeCon} = require('./db');
const {Band, Musician} = require('./index');
const { Song } = require('./Song');

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

    test('Association with Band & Musician', async () => {

        const testing = await Band.findByPk(1)
        await testing.addMusician(1)
        const getResults = await testing.getMusicians()
    
        expect(getResults[0].dataValues.name).toEqual("Chris Martin")

    })

    test('Association with Band & Song', async () => {
        
        await Song.bulkCreate([{ title: "Fix You", Year: 2005 },
        {title: "Adventure of a Lifetime", Year: 2015}])

        const bandTesting = await Band.findByPk(1)

        await bandTesting.addSongs(1)
        await bandTesting.addSongs(2)

        const getSongs = await bandTesting.getSongs()
    
        expect(getSongs.length).toEqual(2)

    })

    test('Eager loading (joining tables)', async () => {
        
        const getAllBands = await Band.findAll({
            include: [
                { model: Song }
            ]
        })

        expect(getAllBands[0].songs[0].title).toEqual("Fix You")
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