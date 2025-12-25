class Vehicle {
  constructor(vehicleNumber, vehicleType) {
    this.vehicleId = crypto.randomUUID();
    this.vehicleNumber = vehicleNumber;
    this.vehicleType = vehicleType;
  }
}

module.exports = Vehicle;
