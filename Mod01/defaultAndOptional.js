"use strict";
function sayHi(greeting, name = "John", character = "!") {
    console.log(greeting, name, character);
}
sayHi("Hello", "Joey");
sayHi("Hi", undefined, ".");
