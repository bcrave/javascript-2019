class Employee {
  //constructor
  constructor(firstName, lastName, social, jobTitle, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._social = social;
    this._jobTitle = jobTitle;
    this._salary = salary;
    this._active = true; //default value;
  }

  fire() {
    this._active = false;
  }

  info() {
    if (this._active) {
      const info = `${this._firstName} ${this._lastName}, ${this._social}, ${this._jobTitle}, ${this._salary}`;
      return info;
    } else {
      const info = "Employee is not active";
      return info;
    }
  }
}

class PTEmployee extends Employee {
  constructor(firstName, lastName, social, jobTitle, salary, hoursPerWeek) {
    super(firstName, lastName, social, jobTitle, salary);
    this._hoursPerWeek = hoursPerWeek;
  }

  info() {
    if (this._active) {
      const info = `${this._firstName} ${this._lastName}, ${this._social}, ${this._jobTitle}, ${this._salary}, ${this._hoursPerWeek}`;
      return info;
    } else {
      const info = "Employee is not active";
      return info;
    }
  }

  set salary(newSalary) {
    if (newSalary > 0) {
      this._salary = newSalary;
    } else {
      alert("You have to pay your employees.");
    }
  }

  get salary() {
    return this._salary;
  }
}
