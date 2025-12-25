const { spotStatus } = require("../constants/enum");

class ParkingFloor {
  constructor(floorId, floorNumber) {
    this.floorId = floorId;
    this.floorNumber = floorNumber;
    this.spots = [];
  }

  addSpot(spot) {
    this.spots.push(spot);
  }

  getAvailableSpot(vehicleType) {
    return this.spots.find(
      (spot) =>
        spot.spotType === vehicleType && spot.status === spotStatus.AVAILABLE
    );
  }
}

module.exports = ParkingFloor;
