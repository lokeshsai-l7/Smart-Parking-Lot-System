const ParkingLot = require("./ParkingLot");
const ParkingFloor = require("./models/ParkingFloor");
const ParkingSpot = require("./models/ParkingSpot");
const Vehicle = require("./models/Vehicle");
const { vehicleType } = require("./constants/enum");

const parkingLot = new ParkingLot();

const floor1 = new ParkingFloor("F1", 1);
floor1.addSpot(new ParkingSpot("S1", "F1", vehicleType.CAR));
floor1.addSpot(new ParkingSpot("S2", "F1", vehicleType.MOTORCYCLE));

parkingLot.addFloor(floor1);

// Vehicle entry
const vehicle = new Vehicle("TS09AB1234", vehicleType.CAR);
const ticket = parkingLot.checkIn(vehicle);

console.log("Ticket Issued:", ticket.ticketId);

// Vehicle exit
setTimeout(() => {
  const completedTicket = parkingLot.checkOut(ticket.ticketId);
  console.log("Parking Fee:", completedTicket.fee);
}, 2000);
