class Vehicle {
  constructor(color, direction, currentSpeed, topSpeed) {
    this._color = color;
    this._direction = direction;
    this._currentSpeed = currentSpeed;
    this._topSpeed = topSpeed;
    this._engineStarted = false;
  }

  info() {
    alert(
      `Color: ${this._color}, Direction: ${this._direction}, Current Speed: ${this._currentSpeed}, Top Speed: ${this._topSpeed}`
    );
  }
  turnOn() {
    this._engineStarted = true;
    alert("Vroom vroom");
  }

  turnOff() {
    this._engineStarted = false;
    alert("Engine stopped");
  }

  accelerate(num) {
    this._currentSpeed += num;
    alert(
      "You excellerated by " +
        num +
        " MPH.  Current speed is now " +
        this._currentSpeed
    );
  }

  brake(num) {
    this._currentSpeed -= num;
    alert("You braked. Current speed is now " + this._currentSpeed);
  }

  turnLeft(degrees) {
    this._direction = degrees;
    alert("You turned " + degrees + " to the left.");
  }

  turnRight(degrees) {
    this._direction = degrees;
    alert("You turned " + degrees + " to the right.");
  }

  set direction(newDirection) {
    if (newDirection > 0 || newDirection < 360) {
      this._direction = newDirection;
    } else {
      alert("No driving in circles.");
    }
  }
}

class Bus extends Vehicle {
  constructor(color, direction, currentSpeed, topSpeed, numberOfSeats) {
    super(color, direction, currentSpeed, topSpeed);
    this._numberOfSeats = numberOfSeats;
  }
}

class Ambulance extends Vehicle {
  constructor(color, direction, currentSpeed, topSpeed) {
    super(color, direction, currentSpeed, topSpeed);
    this._sirenOn = false;
  }

  sirenOn() {
    this._sirenOn = true;
  }

  sirenOff() {
    this._sirenOff = false;
  }
}
