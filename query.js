// Write your queries here
const db = require('./db')
const { Flight } = require('./models')
const { Airport } = require('./models')

const findAll = async () => {
  let flightsArray = await Flight.find({})
  let airportsArray = await Airport.find({})
  flightsArray.forEach(flight => {
    let depoAirpo = ""
    let arivAirpo = ""
    airportsArray.forEach(airport => {
      if (flight.departingAirport.toString() === airport.id) {
        depoAirpo = airport.name
        console.log("match!")
      }
      if (flight.arrivalAirport.toString() === airport.id) {
        arivAirpo = airport.name
        console.log("match!")
      }
    })
    console.log(`${flight.flightNumber}, ${flight.airline}, Departing Airport: ${depoAirpo}, Arriving Airport: ${arivAirpo}, ${flight.departureDateTime}`)
  })
}

const findFlightById = async(id) => {
  const flight = await Flight.findById(id)
  console.log(flight)
}

const findAirportById = async(id) => {
  const airport = await Airport.findById(id)
  console.log(airport)
}

const createFlight = async () => {
  const kcmo = await Airport.find({ code: 'MCI' })
  const austx = await Airport.find({ code: 'AUS' })
  const orlando = await Airport.find({ code: 'MCO' })
  const flight = await Flight.create({
    airline: "TestLine",
    flightNumber: 'Test',
    price: 53,
    numberOfSeats: 12,
    departingAirport: austx[0]._id, 
    arrivalAirport: orlando[0]._id, 
    departureDateTime: "2024-12-22T23:00:00",
  })
  console.log(flight)
}

const createAirport = async () => {
  const airport = await Airport.create({
    name: "Test",
    location: "Text City",
    code: "TST"
  })
  console.log(airport)
}

const deleteFlight = async (id) => {
  const flight = await Flight.findByIdAndDelete(id)
  console.log(flight)
}

const deleteAirport = async (id) => {
  const airport = await Airport.findByIdAndDelete(id)
  console.log(airport)
}

const updateFlightById = async(id, newFlight) => {
  const updated = await Flight.findByIdAndUpdate(id, newFlight, { new : true })
  console.log(updated)
}

const updateAirportById = async(id, newAirport) => {
  const updated = await Airport.findByIdAndUpdate(id, newAirport, { new : true })
  console.log(updated)
}

async function main() {
  const kcmo = await Airport.find({ code: 'MCI' })
  const austx = await Airport.find({ code: 'AUS' })
  const orlando = await Airport.find({ code: 'MCO' })
  try {
    // await findAll()
    // await findFlightById("6711c187c7ef595a811b4c38")
    // await findAirportById("6711c17deed26b26b1634a4c")
    // await createAirport()
    // await createFlight()

    // await updateFlightById("6711c68b6c3f12e980928543",
    //   {
    //     airline: "Northeast Airlines",
    //     flightNumber: 'WS1664',
    //     price: 456,
    //     numberOfSeats: 78,
    //     departingAirport: orlando[0]._id, 
    //     arrivalAirport: kcmo[0]._id, 
    //     departureDateTime: "2024-10-22T22:00:00",
    //   }
    // )

    // await updateAirportById("6711c17deed26b26b1634a4c", {
    //   name: "Kansas City Airport",
    //   location: "Kansas City",
    //   code: "MCI"
    // })

    await deleteFlight("6711c68b6c3f12e980928543")
    await deleteAirport("6711c4fbebbea501c7ef0e88")
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()