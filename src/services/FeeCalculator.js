const { vehicleType } = require("../constants/enum");

class FeeCalculator {
  constructor() {
    this.pricing = {
      [vehicleType.MOTORCYCLE]: 20,
      [vehicleType.CAR]: 40,
      [vehicleType.BUS]: 100,
    };
  }

  calculate(ticket) {
    const durationMs = ticket.exitTime - ticket.entryTime;
    const hours = Math.ceil(durationMs / (1000 * 60 * 60));
    return hours * this.pricing[ticket.vehicle.vehicleType];
  }
}

module.exports = FeeCalculator;
