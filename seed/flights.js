const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const kcmo = await Airport.find({ code: 'MCI' })
  const austx = await Airport.find({ code: 'AUS' })
  const orlando = await Airport.find({ code: 'MCO' })

  const flights = [
      {
        airline: "United Airlines",
        flightNumber: 'UA1234',
        price: 500,
        numberOfSeats: 82,
        departingAirport: kcmo[0]._id, 
        arrivalAirport: austx[0]._id, 
        departureDateTime: "2024-10-22T16:00:00",
      },
      {
        airline: "Southwest Airlines",
        flightNumber: 'WS1234',
        price: 243,
        numberOfSeats: 39,
        departingAirport: orlando[0]._id, 
        arrivalAirport: austx[0]._id, 
        departureDateTime: "2024-10-22T22:00:00",
      },
      {
        airline: "Delta Airlines",
        flightNumber: 'DA1234',
        price: 179,
        numberOfSeats: 4,
        departingAirport: kcmo[0]._id, 
        arrivalAirport: orlando[0]._id, 
        departureDateTime: "2024-10-22T19:00:00",
      },
      {
        airline: "Frontier Airlines",
        flightNumber: 'FU1234',
        price: 396,
        numberOfSeats: 78,
        departingAirport: austx[0]._id, 
        arrivalAirport: kcmo[0]._id, 
        departureDateTime: "2024-10-22T17:00:00",
      },
      {
        airline: "Allegiant Air",
        flightNumber: 'AA1234',
        price: 45,
        numberOfSeats: 608,
        departingAirport: austx[0]._id, 
        arrivalAirport: orlando[0]._id, 
        departureDateTime: "2024-10-22T13:00:00",
      },
      {
        airline: "Jetblue",
        flightNumber: 'JB1234',
        price: 12,
        numberOfSeats: 493,
        departingAirport: austx[0]._id, 
        arrivalAirport: kcmo[0]._id, 
        departureDateTime: "2024-10-22T02:00:00",
      },
  ]

  await Flight.insertMany(flights)
  console.log('Created flights with airports!')
}
const run = async () => {
  await main()
  db.close()
}

run()