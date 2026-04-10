/* Let and var scope ( 1 )
var topic = "python";
        if (topic)
        {
            let topic = "JS"; // let here has the block scope 
            console.log("block", topic);
        }
        console.log("global", topic); // whereas the var has global scope. 
*/ 

/* Creating divs using loop ( 2 )
var box = document.getElementById("box");
    var div; 
    for(let i=0; i<7; i++)
    {
        div = document.createElement("div");
        div.onclick = function() {
            alert("This is a box #" + i);
        }
        box.appendChild(div);
    }
*/ 

/* Const variables ( 3 )
const catchtom = true; 
    catchtom = false; 
    console.log(catchtom);
*/ 

/* Template Strings ( 4 )
function print(fullName)
{
    console.log(`Hi ${fullName} what is goin on!`);
}
print("Isabell");

function printslip(Name, price)
{
    let shipping = 20.35;
    console.log(
            `Hi ${Name} thanks for purchasing!
            Your order summary is as follows: 
            Total = $${price}
            Shipping = $${shipping}
            Grand Total = $${price + shipping}`
    );
}
printslip("Abdullah", 89);
*/

/* Searchig Strings ( 5 )
const ferrari = "Purosangue";
console.log(ferrari.startsWith("pur")); // Yeilds false because it it case sensitive.
console.log(ferrari.endsWith("e")); // Yields true as it ends with e. 
console.log(ferrari.includes("san")); // Yields true as san is included. 
console.log(ferrari.search("osa")); // Yields 3.
*/ 

/* Symbols ( 6 )
const id = Symbol();
const carinfo = {
    company: "Ferrari",
    vehiclename : "Purosangue",
    id : "Xc-itll"
};
carinfo[id] = 99801;
console.log(carinfo);
*/ 

/* Map Functions ( 7 ) 
let myArray = ["eight", "orange", 7, "honda", 1938, 22];
let mySet = new Set(myArray);

mySet.add("eighty");
mySet.add({honda: "prelude", nissan: "z"});

console.log(mySet);
console.log(mySet.size);
mySet.delete(7);
mySet.forEach(function(val)
{
    console.log(val);
});


let myMap = new Map([['Audi', 'RS6 Quattro'], ['Bmw', 'M5']]);
myMap.set('Merc', 'W213');
console.log(myMap);
myMap.delete('Bmw');
console.log(myMap);



let carWeakSet = new WeakSet();
let car1 = {
    make: "honda",
    year: '2025'
}
carWeakSet.add(car1);

let car2 = {
    make: "Ferrari",
    year: '2024'
}
carWeakSet.add(car2);
console.log(carWeakSet);

let carWeakMap = new WeakMap();
let car1 = {
    make: "honda",
    year: '2025'
}
let car2 = {
    make: "Ferrari",
    year: '2024'
}
carWeakMap.set(car1, car2);
console.log(carWeakMap);

/*
let course = new Map();
course.set("react", {description: "ui"});  
course.set("jest", {description: "testing"});
console.log(course.get("react"));
console.log(course.get("jest"));
 Here react and jest are keys while {description: "ui"} as whole is object and in it
description is property while ui is string value. 
let date = new Date();
let details = new Map([
    [date, "today"],
    [2, {javascript: ["js", "node", "react"]}], 
    ["items", [1, 2]]
]);
console.log(details.get(date));
console.log(details.get("items"));
console.log(details.get(2).javascript);

console.log(details.size);

details.forEach(function (item) 
{
    console.log(item);
});
*/

/* Classes & Inheritance (8)
class car {
    constructor(type, company, color, year)
    {
        this.type = type; 
        this.company = company;
        this.color = color; 
        this.year = year;
    }
    static count()
    {
        console.log("Only 50 of its kind");
    }
    car_details()
    {
        console.log("It is an "+ this.type + " of color " + this.color+ " , year " + this.year + " from " + this.company);
    }
}
let honda = new car("Sports coupe", "Honda", "Black", 2026);
honda.car_details();
car.count(); // Static function call.  


class feature extends car {
    constructor(type, company, color, year, transmission)
    {
        super(type, company, color, year);
        this.transmission = transmission;
    }
    newfeatures()
    {
        console.log("It is an "+ this.type + " of color " + this.color+ " , year " + this.year + " from " + this.company + "and " + this.transmission);

    }
};
let honda_new = new feature("Sports coupe", "Honda", "Black", 2026, "8 speed automatic.");
honda_new.newfeatures();
*/ 

/* Default params & spread operator (9) 
function greet($greeting = "Welcome")
{
    console.log($greeting);
}
greet();

Spread Operator is represented as three dots and is used to allow an expression to be expanded in places
 where multiple arguments are expected. */


 /*
 let args1 = ["b", "c", "d","e"];
 let args2 = [1, 2, 3, 4];

 function test()
 {
    console.log(args1 + "" + args2);
 }

 test(...args1, ...args2);
 */

/* Arrow Functions (10)
let add = function (a,b)
{
    let sum = a+b;
    console.log(sum);
}
add(a, 2);
/* But for Arrow Function we will write it this way
let final = (a,b,c) =>
{
    let total = a + b - c * 2;
    console.log(total);
}
final(22,-3,-29);
*/ 

/*Promises (11) */
/*Promises object is sed for deferred and asynchronous computations 
and represents operation that hasn't completed yet but is expected 
in the future.

var myPromise = Promise.resolve('Foo');
myPromise.then((res) => console.log(res));
*/ 

/*Generators are functions that can be paused and then resumed as many times as we like  */ 
function *g1()
{
    console.log('Hello');
    yield 'yield 1 Ran..'; 
    console.log('World');
    yield ' yield 2 Ran...';
    return 'yield 3 Ran';
}
var g = g1();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

/*
for (let val of g)
{
    console.log(val);
} 
*/
