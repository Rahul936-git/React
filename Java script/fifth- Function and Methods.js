// invoke --> call;

//redudancy --> repeat;


function sentence(){       // parenthesis
    console.log("Rahul kumar");
    console.log("Hello!");
    console.log("Fine thank you");
}

sentence(); //argument


function statment(line){
    console.log(line);
}

statment("My name is Rahul Kumar");


function sum(i,j){
    console.log(i+j);
}
sum(12, 20);


function add(x,y){
    // s=x+y;
    // return s;
    return x+y;
}
let val=add(87,100);
console.log(val);


function multiplication(x,y){
    return x*y;
}
 let mul=multiplication(5,6);
 console.log(mul);

/*
NOTE: function parameters --> like local variable of function -->    valid till block scope.
 */



// const arrowsum=(a,b)=>{
//     console.log(a+b);
// };
// console.log(arrowsum);
// let number= arrowsum(8,5);
// console.log(number);


const arrowsum=(x,y)=>{
    // console.log(x*y);
    return x*y;
};

number=arrowsum(9,6);
    console.log(number);



const printhello =()=>{
    console.log("hello!");
}

val=printhello();
console.log(val);

/*
Qs.1) Create a function using the “function” keyword that takes a String   as an argument & returns the number of vowels in the string.
 */


function countVowel(str){
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    // console.log(count);
    return count;
}

val=countVowel("rahul kumar");
console.log(val);

/*
 Q.2) Create an arrow function to perform the same task.
 */

const countVowels =(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
            // console.log(char);
        }
    }
    // console.log(count);
    return count;
}

val=countVowels("rahul kumar");
console.log(val);


// NOTE :   method is also a function which is associated with other  
//          data structure like object and so on.

function abc(){
    console.log("hello");
}

function myfuc(abc){
    return abc;
}
//  a function js can return or pass from anywhere like normal variable

let arr=[1,2,3,4,5];

arr.forEach(function printval(val){
    console.log(val);
});


// or

arr=[9,8,7,6,5];

arr.forEach((val)=>{
    console.log(val);
})


arr=["Noida","Pune","Hydrabad"];

arr.forEach((val)=>{
    console.log(val);
});

arr.forEach((val)=>{
    console.log(val.toUpperCase());
});

arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});

// Higher order function/ method use other function as parameters or 
// return other function .
// (that either take another function as 
// parameter inside them  or they take another function as output.)

// if callback is present in function then it is higher order function.

// A callback is a function passed as an argument to another function. 






/*
Q.1)Qs. For a given array of numbers,
 print the square of each value using the forEach loop
*/

arr=[1,2,3,4,5,6];

arr.forEach((val)=>{
    // val *= val;
    // console.log(val);
    console.log(val*val);
})

// or

let= calc_square=((val)=>{
    console.log(val*val);
})

arr.forEach(calc_square);

/*
                                 Map
 */

arr.map((val)=>{
    console.log(val)
});

// A value return by map callback is stored into new array

let new_array= arr.map((val)=>{
    // return val;
    return val*val;
});

console.log(new_array);

arr.map((val)=>{
    console.log(val);
});

/*
                                   Filter
*/

arr=[8,7,6,5,4,3,2,6];

let odd_value= arr.filter((val)=>{
    // if(val % 2 !== 0)
    //     return val;
    return val%2 !==0;
});

console.log(odd_value);

/*
                                 Reduce
*/

arr=[9,1,2,8,7,3,4,6];

const output1=arr.reduce((previous , current)=>{
    return previous + current;
});
console.log(output1);


const output2= arr.reduce((previous,current)=>{
    return previous>current ? previous : current;
});
console.log(output2);

/*
Qs.2) We are given array of marks of students.
 Filter out of the marks of students that scored 90+.
 */
arr=[67,89,54,99,92,89,86,71];

const marks= arr.filter((val)=>{
    return val>90;
})
console.log(marks);


 /*
 Qs.3) Take a number n as input from user.
  Create an array of numbers from 1 to n.
*/

let n= prompt("enter a number");

arr=[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

// Use the reduce method to calculate sum of all numbers in the array.

 sum= arr.reduce((previous, current)=>{
    return previous + current;
});

console.log("sum:",sum);

// Use the reduce method to calculate product of all numbers in the array.

let product= arr.reduce((previous, current)=>{
    return previous * current;
});

console.log("product/factorial:",product);