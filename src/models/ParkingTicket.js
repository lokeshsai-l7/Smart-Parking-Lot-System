const crypto = require("crypto");
const { ticketStatus } = require("../constants/enum");

class ParkingTicket {
  constructor(vehicle, spot) {
    this.ticketId = crypto.randomUUID();
    this.vehicle = vehicle;
    this.spot = spot;
    this.entryTime = new Date();
    this.exitTime = null;
    this.status = ticketStatus.ACTIVE;
    this.fee = 0;
  }

  closeTicket(fee) {
    this.exitTime = new Date();
    this.fee = fee;
    this.status = ticketStatus.COMPLETED;
  }
}

module.exports = ParkingTicket;
