const vehicleType = Object.freeze({
  MOTORCYCLE: "MOTORCYCLE",
  CAR: "CAR",
  BUS: "BUS",
});

const spotStatus = Object.freeze({
  AVAILABLE: "AVAILABLE",
  OCCUPIED: "OCCUPIED",
});

const ticketStatus = Object.freeze({
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
});

module.exports = {
  vehicleType,
  spotStatus,
  ticketStatus,
};
