const { spotStatus } = require("../constants/enum");

class ParkingSpot {
  constructor(spotId, floorId, spotType) {
    this.spotId = spotId;
    this.floorId = floorId;
    this.spotType = spotType;
    this.status = spotStatus.AVAILABLE;
  }

  occupy() {
    if (this.status === spotStatus.OCCUPIED) {
      throw new Error("Spot already occupied");
    }
    this.status = spotStatus.OCCUPIED;
  }

  free() {
    this.status = spotStatus.AVAILABLE;
  }
}

module.exports = ParkingSpot;
