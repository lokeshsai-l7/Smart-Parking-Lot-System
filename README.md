# 🚗 Smart Parking Lot Backend (Node.js – Low Level Design)

**Smart Parking Lot backend system** using **Node.js (ES6 classes)**.  

---

## 📌 Problem Overview

Design a backend system for a **multi-floor parking lot** that:

- Automatically assigns parking spots based on vehicle size
- Tracks vehicle entry and exit times
- Calculates parking fees based on duration and vehicle type
- Updates parking availability in real-time
- Handles multiple vehicles entering and exiting concurrently

---

## ✅ Features

- 🚙 Vehicle entry & exit handling
- 🅿️ Automatic parking spot allocation
- ⏱️ Parking duration tracking
- 💰 Fee calculation based on rules
- 🧱 Clean object-oriented design
- 🔄 Extensible and scalable architecture

---

## 🏗️ System Design Overview

### Core Components

- **ParkingLot** – Main orchestrator
- **ParkingFloor** – Represents a floor with parking spots
- **ParkingSpot** – Individual parking spot
- **Vehicle** – Vehicle entering the parking lot
- **ParkingTicket** – Tracks parking session
- **SpotAllocator** – Allocates spots efficiently
- **FeeCalculator** – Calculates parking fees

---

## 🧩 Design Principles Used

- **Single Responsibility Principle (SRP)**
- **Separation of Concerns**
- **Encapsulation**
- **Open/Closed Principle**
- **Low Coupling, High Cohesion**

---

## 📁 Project Structure

```txt
src/
├── constants/
│   ├── enum.js
├── models/
│   ├── Vehicle.js
│   ├── ParkingSpot.js
│   ├── ParkingFloor.js
│   └── ParkingTicket.js
├── services/
│   ├── SpotAllocator.js
│   └── FeeCalculator.js
├── ParkingLot.js
└──index.js
```

> ℹ️ Current implementation uses **in-memory storage** for simplicity.

---

## 📊 Entity Relationship Overview

Vehicle → ParkingTicket → ParkingSpot → ParkingFloor → ParkingLot

---

## ⚙️ Parking Spot Allocation Logic

1. Identify required spot type based on vehicle
2. Search for the first available spot
3. Mark the spot as `OCCUPIED`
4. Generate a parking ticket

Vehicle enters → Spot allocated → Ticket created

---

## 💰 Fee Calculation Logic

### Sample Pricing

| Vehicle Type | Price / Hour |
| ------------ | ------------ |
| Motorcycle   | ₹20          |
| Car          | ₹40          |
| Bus          | ₹100         |

Fee = ceil(total_duration_in_hours) × price_per_hour

---

## 🔄 Entry & Exit Flow

### Vehicle Entry

Vehicle → Check-in → Spot allocated → Ticket issued

### Vehicle Exit

Ticket → Fee calculated → Spot freed → Ticket closed

---

## ▶️ Example Usage

```js
src/index.js

const parkingLot = new ParkingLot();

const floor1 = new ParkingFloor("F1", 1);
floor1.addSpot(new ParkingSpot("S1", "F1", VehicleType.CAR));

parkingLot.addFloor(floor1);

const vehicle = new Vehicle("TS09AB1234", VehicleType.CAR);
const ticket = parkingLot.checkIn(vehicle);

const completedTicket = parkingLot.checkOut(ticket.ticketId);
console.log(completedTicket.fee);
```

---
