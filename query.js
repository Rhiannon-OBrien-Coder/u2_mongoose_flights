// Write your queries here
const db = require('./db')
const { Flight } = require('./models')
const { Airport } = require('./models')

const findAll = async () => {
  let flightsArray = await Flight.find({})
  let airportsArray = await Airport.find({})
  let getInfo = flightsArray.map(flight => {
    airportsArray.forEach(airport => {
      if (flight.departingAirport === airport.id) {
        flight._doc.airport = airport.name
      }
    })
    return flight
  })
  console.log(getInfo)
}

async function main() {
  try {
    await findAll()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()