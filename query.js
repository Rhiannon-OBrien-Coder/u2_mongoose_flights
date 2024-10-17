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

// const findFlightById = async(id) => {
//   const flight = await Flight.findById()
//   console.log(flight)
// }

// const findAirportById = async(id) => {
//   const airport = await Airport.findById()
//   console.log(airport)
// }

const createFlight = async () => {
  const flight = await Flight.create({
    airline: "Southwest Airlines",
    flightNumber: 'WS1234',
    price: 243,
    numberOfSeats: 39,
    departingAirport: orlando[0]._id, 
    arrivalAirport: austx[0]._id, 
    departureDateTime: "2024-10-22T22:00:00",
  })
  console.log(flight)
}

const createAirport = async () => {
  const airport = await Airport.create({
    name: "Kansas City International Airport",
    location: "Kansas City, Missouri",
    code: "MCI"
  })
  console.log(airport)
}

// const deleteFlight = async () => {
//   const flight = await Flight.deleteOne({ flightNumber: 'UA1234' })
//   console.log(flight)
// }

// const deleteAirport = async () => {
//   const airport = await Airport.deleteOne({ code: 'AUS' })
//   console.log(airport)
//}

const updateFlight = async () => {
  const updated = await Flight.updateOne(
      { departureDateTime: "2024-10-22T19:00:00" },
      { departureDateTime: "2024-10-22T19:30:00" }
  )
  console.log(updated)
}

async function main() {
  try {
    await createFlight()
    await createAirport()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()