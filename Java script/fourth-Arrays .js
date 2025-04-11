let marks =[87, 56, 34, 24, 97];
console.log(marks);
console.log(marks.length); // 5
console.log(typeof marks); // object
console.log(marks[4]); // 97
marks[4]=33;
console.log(marks[4]); // 33 update
console.log(marks[8]); // undefined

let word =["huihiu", "jhbhjnk", "uygyuguyb", "gtvyub", "hghjbjhbwe", "ygug"];
console.log(word);

/*
NOTE: In java-script , string -> immutable; & array -> mutable;
*/

for(let i=0;i<word.length;i++){
    console.log(word[i]);
}

for(let string of word){
    console.log(string);
}

let cities=["Delhi","Mumbai","chennai","kolkata","banglore","pune","Hydrabad","Noida"];
console.log(cities);

for(let i=0;i<cities.length; i++){
    console.log(cities[i]);
}

for(let city of cities){
    console.log(city);
}

for(let city of cities){
    console.log(city.toUpperCase())
}

/*  
.
Qs.1). For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
    Find the average marks of the entire class.
*/

marks=[56, 45,35,67,78, 24, 56, 56, 12, 90, 0,86,45,20];

let sum=0;

for(let mark of marks){
    console.log(mark);
    sum += mark;
}

let avg = sum/marks.length;

// console.log(avg);
console.log(`the averge marks of class is ${avg}`);

/*
Qs.2) For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
    All items have an offer of 10% OFF on them.
    Change the array to store final price after applying offer
*/

let prices=[250,645,300,900,50];

let i=0;
for(let price of prices){
    let offer= price/10;
    prices[i] -= offer;
    console.log(prices[i]);
    i++;
}

// or
 prices=[250,645,300,900,50];

for(let i=0;i<prices.length;i++){
    let offers = prices[i]/10;
    prices[i] -= offers;
}
console.log(prices);

let vegetable=["potato", "brinjal","pumpkin","cauliflower","cabbage"];
console.log(vegetable);
vegetable.push("Tomato","ladies finger","Bitter gourd");
console.log(vegetable);

vegetable.pop();
console.log(vegetable);

let deleted_item = vegetable.pop();
console.log("deleted_item =" , deleted_item);

console.log(vegetable.toString()); // string
console.log(vegetable); // no change in original array;

//concat array

let A1 =["yui", "iuyu", "ghuihu", "hgughi"];
let B1 =["yui", "iuyu", "ghuihu", "hgughi"];
let c1 =["yui", "iuyu", "ghuihu", "hgughi"];


let x1= A1.concat(B1);
console.log(x1);

let y1= A1.concat(B1).concat(c1);
console.log(y1);

A1.unshift("cccccccc");
console.log(A1);

A1.unshift("hhhhhhhhh");
console.log(A1);

B1.unshift("hhhhhhhhh");
console.log(B1);

A1.shift();
console.log(A1);

M1 = A1.shift();
console.log("Deleted:",M1);


// silice

console.log(A1.slice(1,4)); //ending index non-inclusive

arr=[3,4,5,6,7,8,9,0,2,1];

arr.splice(2,4,101,102,103);
console.log(arr);

arr=[3,4,5,6,7,8,9,0,2,1];

arr.splice(2,0,111); // add one element:111 after 2nd position
console.log(arr);

arr=[3,4,5,6,7,8,9,0,2,1];

arr.splice(6,1); // delete oone element
console.log(arr);

arr=[3,4,5,6,7,8,9,0,2,1];
arr.splice(3); // delete all element starting from 3rd index;
console.log(arr);

arr=[3,4,5,6,7,8,9,0,2,1];
arr.splice();
console.log(arr); // no change in arr

// practice Q.3;

/*
Qs. Create an array to store companies 
     -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix";

a. Remove the first company from the array
*/

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.shift();
console.log(companies);

// or

companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.splice(0,1);
console.log(companies);

// b.) Remove Uber & Add Ola in its place 

companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.splice(2,1,"ola");
console.log(companies);

// c.) Add amazon at the end.

companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.splice(6,0,"Amazon");
console.log(companies);

// or

companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.push("Amazon");
console.log(companies);

// c.) Add Flipkart at the start.

companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.unshift("Flipkart");
console.log(companies);

// or

companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.splice(0,0,"Flipkart");
console.log(companies);


