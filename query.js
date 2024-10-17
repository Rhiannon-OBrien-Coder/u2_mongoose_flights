// Write your queries here
const db = require('./db')
const { Flight } = require('./models')
const { Airport } = require('./models')

// const findAll = async () => {
//   let flightsArray = await Flight.find({})
//   let airportsArray = await Airport.find({})
//   let getInfo = flightsArray.map(flight => {
//     airportsArray.forEach(airport => {
//       if (flight.departingAirport === airport.id) {
//         flight._doc.airport = airport.name
//       }
//     })
//     return flight
//   })
//   console.log(getInfo)
// }

const findFlightById = async(id) => {
  const flight = await Flight.findById()
  console.log(flight)
}

const findAirportById = async(id) => {
  const airport = await Airport.findById()
  console.log(airport)
}

async function main() {
  try {
    await findAirportById()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()