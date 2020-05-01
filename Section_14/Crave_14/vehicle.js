// vehicle{
//     Properties:         color (string),
//                         direction (integer 0-359),
//                         currentSpeed (integer),
//                         topSpeed (integer),
//                         engineStarted (boolean),
//     Methods:            accelerate(),
//                         brake(),
//                         turnOn(),
//                         turnOff(),
//                         turnLeft(),
//                         turnRight()
// }

class Vehicle {
  constructor(color, direction, currentSpeed, topSpeed) {
    this._color = color;
    this._direction = direction;
    this._currentSpeed = currentSpeed;
    this._topSpeed = topSpeed;
    this._engineStarted = false;
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

  turnOn() {
    this._engineStarted = true;
  }

  turnOff() {
    this._engineStarted = false;
  }

  turnLeft(degrees) {
    if (degrees > 0 || degrees < 359) {
      alert("Turning " + degrees + " degrees to the left.");
    }
  }

  turnRight(degrees) {
    if (degrees > 0 || degrees < 359) {
      alert("Turning " + degrees + " degrees to the right.");
    }
  }
}
