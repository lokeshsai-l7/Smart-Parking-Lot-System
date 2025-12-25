const ParkingTicket = require("./models/ParkingTicket");
const SpotAllocator = require("./services/SpotAllocator");
const FeeCalculator = require("./services/FeeCalculator");
const { totalFloors } = require("./constants/enum");

class ParkingLot {
  constructor() {
    this.floors = [];
    this.activeTickets = new Map();
    this.feeCalculator = new FeeCalculator();
  }

  addFloor(floor) {
    this.floors.push(floor);
  }

  checkIn(vehicle) {
    const allocator = new SpotAllocator(this.floors);
    const spot = allocator.allocate(vehicle.vehicleType);

    const ticket = new ParkingTicket(vehicle, spot);
    this.activeTickets.set(ticket.ticketId, ticket);

    return ticket;
  }

  checkOut(ticketId) {
    const ticket = this.activeTickets.get(ticketId);
    if (!ticket) {
      throw new Error("Invalid ticket");
    }

    ticket.exitTime = new Date();
    const fee = this.feeCalculator.calculate(ticket);

    ticket.closeTicket(fee);
    ticket.spot.free();

    this.activeTickets.delete(ticketId);
    return ticket;
  }
}

module.exports = ParkingLot;
