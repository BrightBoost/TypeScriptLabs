"use strict";
class Student {
    // called when you create an object using new 
    constructor(stuid, name, gpa) {
        this.stuid = stuid;
        this.name = name;
        this.gpa = gpa;
    }
    toString() {
        return `Name: ${this.name} – GPA: ${this.gpa}`;
    }
}
// creating objects and working with them
//      (because id is private, you cannot use it in the code below)
let stu1 = new Student(1, "Ian", 3.6);
stu1.name = "Ian Auston";
stu1.gpa -= .1;
console.log(stu1.toString());
let stu2 = new Student(2, "Zephaniah", 3.7);
stu2.name = "Zephaniah Redd";
stu2.gpa += .1;
console.log(stu2.toString());
