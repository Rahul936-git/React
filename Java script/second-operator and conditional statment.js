 /*This is the code that print Hello world in our consol window */
console.log("HELLO WORLD")

// arithmetic operator;

let a=5;
let b=3;

console.log("a = ",a , "b =" ,b );
console.log("a+b =" , a + b);
console.log("a-b =" , a - b);
console.log("a*b =" , a*b);
console.log("a/b =" , a/b);
console.log("a%b =", a%b);
console.log("a**b =", a**b); // ** power

// Uranary operator

a=a+1; //6
console.log("a =",a);

console.log("a++ =", a++); //6
console.log("++a =", ++a); //8
console.log("a-- =", a--); //8
console.log("--a =",--a ); //6

//Assinment operator
 a=89;
 b=95;

a+=1; // a= a+1;
b-=1;

console.log("a+=1 =",a);
console.log("b-=1 =",b);

// comparision operator

a=8;   // number
b="8"; // string -> number;

console.log("8==7",a==b );
console.log("8 != 7", a!=b); 


a=8;
b="8";

console.log("8===7",a===b );
console.log("8 !== 7", a!==b); 
console.log("8<8 =",a<b);
console.log("8>8 =", a>b);
console.log("8<=8 =",8<=8);
console.log("8>=8 =", a>=b);

a=18;
b=9;

 let cond1 = a>b;
 let cond2 = a===b;

 console.log("cond1 && cond2 =", cond1 && cond2);
 console.log("cond1 || cond2 =",  cond1 || cond2);
 console.log("!(cond1 && cond2) =", !(cond1 && cond2));
 console.log("!(cond1 !! cond2) =", !(cond1 || cond2));

//  conditional statment

let age=17;

if(age>18){
    console.log("yes you can vote");
}

else console.log("no, you can not vote");

let mode= "Dark";
let color;

if(mode="light"){
    color="white";
}

if(mode="Dark"){
    color="Black";
}

console.log(color);


mode="Bright";
color;

if(mode==="Dark"){
    color="Black";
}

else color="white";

console.log(color);


let nums=15;

if(nums%2 ===0){
    console.log(nums, "is even");
}

else console.log(nums,"is odd");



mode="blue";
color;

if (mode==="Dark"){
    color="black";
}

else if(mode==="blue"){
    color="blue";
}

else if(mode==="green"){
    color="Green";
}

else{
    color="white";
}

console.log(color);




age=98;

// let result= age<19 ? "adult" : "teen_age";

// console.log(result);

let result= age<19 ? console.log("adult") : console.log("teen_age");


 // practice question


   
 /*Qs1.
 
 Get user to input a number using prompt(“Enter a number:”).
  Check if the number is a multiple of 5 or not.

*/

alert("hello!");

prompt("Hello_world");

let name = prompt("Rahul_Kumar");
console.log(name);


let num= prompt("enter the number");

if(num%5 === 0){
    console.log(num, "is multiple of 5");
}

else{
    console.log(num, "is not multiple of 5");
}


/*Qs2.   Write a code which can give grades to students 
according to their scores 

80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

*/

let grade= prompt("give the grade");

if(grade>=80 && grade<=100){
    console.log("Grade-A");
}

else if(grade>=70 && grade<=89){
    console.log("Grade-B");
}

else if(grade>=60 && grade<=69){
    console.log("Grade-C");
}

else if(grade>=50 && grade<=59){
    console.log("Grade-D");
}

else if(grade>=0 && grade<=49){
    console.log("Grade-f");
}






