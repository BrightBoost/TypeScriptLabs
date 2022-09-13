function sayHi(greeting: string, name: string = "John", character: string = "!") : void {
    console.log(greeting, name, character);
}

sayHi("Hello", "Joey");
sayHi("Hi");