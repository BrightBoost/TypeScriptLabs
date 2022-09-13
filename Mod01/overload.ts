function add(x: number, y: number): number;
function add(x: string, y: string): string;

function add(x: any, y: any): any {
    if (typeof x === 'string') {
        return x + ' ' + y;
    } else {
        return x + y;
    }
}
let sum2 = add(10, 15);
let greeting = add("Hi", "Sarah");

// let bool = add(true, true);
// returns 25