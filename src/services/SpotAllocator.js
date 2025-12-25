class SpotAllocator {
  constructor(floors) {
    this.floors = floors;
  }

  allocate(vehicleType) {
    for (const floor of this.floors) {
      const spot = floor.getAvailableSpot(vehicleType);
      if (spot) {
        spot.occupy();
        return spot;
      }
    }
    throw new Error("No parking spot available");
  }
}

module.exports = SpotAllocator;
