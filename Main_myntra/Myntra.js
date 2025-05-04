// import React from "react";
import React ,{useState} from "react";
import ReactDOM from "react-dom/client";

import Card from "../component/card";
import Header from "../component/Header";
import Footer from "../component/Footer";

import arr from "../utils/dummy";

// import { greet } from "./utils/dummy";
// import { meet } from "./utils/dummy";     // simple export can import in {} this curly braces not for export default

// import {greet , meet} from "./utils/dummy";
// import {greet as buy , meet as want} from "./utils/dummy";  // rename 


function App(){

    let [A, setA] = useState(arr); // here (A == arr) ; that means (arr value goes inside the A)

    return(
        <>

        {/*  header */}


        {/* <Header/> */}
        <Header A={A} setA={setA} /> {/* Pass A and setA as props to Header */}   {/* {Pass A and setA to the Header component: This allows the Header component to access the state A and update it with setA.} */}
       


        {/* body */}
        <div className="outSide" style={{display:"flex" , gap:"1rem", flexWrap:"wrap"}}>

            {
                // arr.map((value,index)=>                                  // arr.map does mapping and return here it return arr      // JSX dont understand object it demand exact value ob object
                A.map((value,index)=>
                    <Card key={index} cloth={value.cloth} Discount={value.Discount} image={value.image} price={value.price}/>
                )
            }

        </div> 

        {/*  footer */}
        <Footer/>

        </>
    )
}

const access=ReactDOM.createRoot(document.getElementById('root'));
access.render(<App/>);


                          // You're trying to export a component named Myntra, but nowhere in your file have you defined a component named Myntra. Your main component is named App, so you should change that export line to:
export default App;
