// Write your queries here
const db = require('./db')
const { Flight } = require('./models')
const { Airport } = require('./models')

const findAll = async () => {
    const flights = await Flight.find()
    const kcmo = await Airport.find({ _id: '6707220fbefcf83a1fe376f4' })
    const austx = await Airport.find({ _id: '6707220fbefcf83a1fe376f5' })
    const orlando = await Airport.find({ _id: '6707220fbefcf83a1fe376f6' })
    flights.forEach(async (a) => {
        let myAirport = airports.filter((port) => port.name)
        console.log(
            `${a.airline},
            ${a.flightNumber},
            ${a.departingAirport},
            ${a.arrivalAirport},
            ${a.departureDateTime}`
        )
    })
  }
  
  
//   const hireEmployee = async () => {
//     const company = await Company.findOne()
  
//     let employee = await Employee.create({
//         first_name: "Norbert",
//         last_name: "Elevera",
//         email: "NElevera@tshirts.com",
//         job_title: "Artist",
//         salary_in_usd: 30000,
//         address: "827 Woodland Drive, Kansas City, Kansas",
//         company_id: tshirts[0]._id, 
//     })
//     console.log(employee)
//   }
  
  
//   const updateEmployee = async () => {
//     const updated = await Employee.updateOne(
//         { salary: 65000 },
//         { salary: 75000 }
//     )
//     console.log(updated)
//   }
  
  
//   const fireEmployee = async () => {
//     let deleted = await Employee.deleteOne({ first_name: 'Dwight', last_name: 'Shrute' })
//     console.log(deleted)
//   }

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