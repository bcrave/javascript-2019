class Vehicle {
  constructor(color, direction, currentSpeed, topSpeed) {
    this._color = color;
    this._direction = direction;
    this._currentSpeed = currentSpeed;
    this._topSpeed = topSpeed;
    this._engineStarted = false;
  }

  info() {
    let info = `Vehicle:
    Color: ${this._color}, Direction: ${this._direction}, Current Speed: ${this._currentSpeed}, Top Speed: ${this._topSpeed}`;
    console.log(info);
  }
  turnOn() {
    this._engineStarted = true;
    console.log("vroom vroom");
  }

  turnOff() {
    this._engineStarted = false;
    console.log("Engine stopped");
  }

  accelerate(num) {
    this._currentSpeed += num;
    console.log(
      "You excellerated by " +
        num +
        " MPH.  Current speed is now " +
        this._currentSpeed
    );
  }

  brake(num) {
    this._currentSpeed -= num;
    console.log("You braked. Current speed is now " + this._currentSpeed);
  }

  turnLeft(degrees) {
    if (degrees > 0 && degrees < 360) {
      this._direction = degrees;
      console.log("You turned " + degrees + " to the left.");
    } else {
      console.log("No driving in circles.");
    }
  }

  turnRight(degrees) {
    if (degrees > 0 && degrees < 360) {
      this._direction = degrees;
      console.log("You turned " + degrees + " to the right.");
    } else {
      console.log("No driving in circles.");
    }
  }

  set direction(newDirection) {
    if (newDirection > 0 && newDirection < 360) {
      this._direction = newDirection;
    } else {
      console.log("No driving in circles.");
    }
  }
}

class Bus extends Vehicle {
  constructor(color, direction, currentSpeed, topSpeed, numberOfSeats) {
    super(color, direction, currentSpeed, topSpeed);
    this._numberOfSeats = numberOfSeats;
  }

  info() {
    let info = `Bus:
    Color: ${this._color}, Direction: ${this._direction}, Current Speed: ${this._currentSpeed}, Top Speed: ${this._topSpeed}, Number of Seats: ${this._numberOfSeats}`;
    console.log(info);
  }
}

class Ambulance extends Vehicle {
  constructor(color, direction, currentSpeed, topSpeed) {
    super(color, direction, currentSpeed, topSpeed);
    this._sirenOn = false;
  }

  info() {
    let info = `Ambulance:
    Color: ${this._color}, Direction: ${this._direction}, Current Speed: ${this._currentSpeed}, Top Speed: ${this._topSpeed}, Number of Seats: ${this._numberOfSeats}`;
    console.log(info);
  }

  sirenOn() {
    this._sirenOn = true;
    console.log("WEEWOOWEEWOO!!");
  }

  sirenOff() {
    this._sirenOff = false;
    console.log("Siren off");
  }
}
