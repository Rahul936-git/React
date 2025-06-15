<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes, Route , Link } from "react-router";

import GitHUB from "./src/Github";
=======
import React, { useCallback, useEffect, useMemo, useState }  from "react";
import ReactDOM from "react-dom/client";

// useMemo hook
// 1. counter button : increase
// 2. input field : fibonnaci number
// 0 1 1 2 3 5 8 13 21 34......
// Recursve code time complexiy : 2^n


//   function Fibonnaci(n){
//         if(n<=1) return n;

//         else return Fibonnaci(n-1)+Fibonnaci(n-2);
//     }

>>>>>>> 9ccef8d (Tenth)


function App(){

<<<<<<< HEAD
    return(

        <BrowserRouter>

        <Routes>
            {/* <Route path="/Github" element={<GitHUB></GitHUB>}></Route> */}
            <Route path="/Github/:name" element={<GitHUB></GitHUB>}></Route>
        </Routes>

        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
=======
    const [count,setCount]=useState(0);
    const [number,setnumber]=useState("");

    // const[results,setResults]=useState("");       // this state variable is created only to use useEffect

    // function Fibonnaci(n){
    //     if(n<=1) return n;

    //     else return Fibonnaci(n-1)+Fibonnaci(n-2);
    // }

                                                    // // use callback function

    const Fibonnaci = useCallback((n)=>{
        if(n<=1)
            return n;

        else  return Fibonnaci(n-1) + Fibonnaci(n-2);
    },[])   
                                                      // no dependicies []


    // const result = Fibonnaci(number);

    // useEffect(()=>{                                 // useEffect always executed in last
    //     setResults(Fibonnaci(number));
    // },[number]);

     const result = useMemo(()=>Fibonnaci(number),[number]);  //[dependencies]  // useMemo save extra render unlike useEffect take one extra render

    return(
        <>
        <h1>Counter is : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>

        <div>
            {/* <h2>Fibonnaci number is: {results}</h2> */}              {/* useEffect */}
            <h2>Fibonnaci number is :{result}</h2>                        {/* useMemo */}
            <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)}></input>
        </div>
        </>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
>>>>>>> 9ccef8d (Tenth)
