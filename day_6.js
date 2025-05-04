// import React from "react";  
// import reactDom from "react-dom/client";

// function Counter(){
//     let count=0;

//     function incrementButton(){
//         count++;
//         document.querySelector('h1').innerHTML=`Count is: ${count}`;
//         document.getElementById('b1').innerHTML=`Increment: ${count}`;
//         document.getElementById("b2").innerHTML = `Decrement:${count}`;

//     }

//     function decrementButton(){
//         count--;
//         document.querySelector('h1').innerHTML=`Count is: ${count}`;
//         document.getElementById("b2").innerHTML=`Decrement: ${count}`;
//         document.getElementById("b1").innerHTML = `Increment:${count}`;

//     }

//     return(
//         <div className="first">
//         <h1>Count is: {count}</h1>
//         <button onClick={incrementButton} id="b1">Increment {count}</button>
//         {/* <button onClick={()=>{
//             count=count+1;
//         }}></button> */}
//          <button onClick={decrementButton} id="b2">Decrement {count} </button>            {/* onClick want callback function */}
//         {/* <button onClick={()=>{
//             count=count-1;
//         }}></button> */}
//         </div>
//     )
// }

// const access=document.getElementById('root');

// reactDom.createRoot(access).render(<Counter />);




// /////////////////////////////////// Hooks /////////////////////////////////////



// 

// import React from "react";
import React, {useState} from "react";   // import hooks  // useState is special function that provide react
import reactDom from "react-dom/client";

function Counter(){
    // let count=0;
    let [count , setCount]=useState(0);  // useState return an array //  here, useState(0) goes inside count and return a  function setCount

    function incrementButton(){

        // setCount(count++);
        count++;
        setCount(count); // when ever there is change or upadate in count variable call setCount function and pass this change/update variable as

        // document.querySelector('h1').innerHTML=`Count is: ${count}`;
        // document.getElementById('b1').innerHTML=`Increment: ${count}`;
        // document.getElementById("b2").innerHTML = `Decrement:`;

    }

    function decrementButton(){
        
        // setCount(count--);
        count--;
        setCount(count);

        // document.querySelector('h1').innerHTML=`Count is: ${count}`;
        // document.getElementById("b2").innerHTML=`Decrement: ${count}`;
        // document.getElementById("b1").innerHTML = `Increment:`;

    }

    return(
        <div className="first">
        <h1>Count is: {count}</h1>
        <button onClick={incrementButton} id="b1">Increment {count}</button>
        {/* <button onClick={()=>{
            count=count+1;
        }}></button> */}
         <button onClick={decrementButton} id="b2">Decrement {count} </button>            {/* onClick want callback function */}
        {/* <button onClick={()=>{
            count=count-1;
        }}></button> */}
        </div>
    )
}

const access=document.getElementById('root');

reactDom.createRoot(access).render(<Counter />);

