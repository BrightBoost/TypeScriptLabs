"use strict";
class Employee {
    constructor(id, name, jobTitle, payRate) {
        this.id = id;
        this.name = name;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    toString() {
        return `${this.name} (${this.id}) is a ${this.jobTitle}
  earning $${this.payRate.toFixed(2)}/hr`;
    }
}
