const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airports = [
    {
        name: "Kansas City International Airport",
        location: "Kansas City, Missouri",
        code: "MCI"
    },
    {
        name: "Austin-Bergstrom International Airport",
        location: "Austin, Texas",
        code: "AUS"
    },
    {
        name: "Orlando International Airport",
        location: "Orlando, Florida",
        code: "MCO"
    }
  ]
  await Airport.insertMany(airports)
  console.log('Created airports!')
}


const run = async () => {
  await main()
  db.close()
}

run()