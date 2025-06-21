// import React, { useState } from "react"; 
// import ReactDOM from "react-dom/client";

// import Incriement from "./Incriement";

// function App(){

//     const [count,setcount]=useState(0);

//     return(
//         <>
//         <h1> Parent counter is: {count}</h1>
//         <Incriement number={count} numbers={setcount}/>                                {/* {Here props is send} */}
//         </>
//     )
    
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// **************************** State Lifting ******************************//



import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Incriement from "./Incriement";
import Decriement from "./Decriement";

function App(){

    const [count,setcount]=useState(100);
    

    return(
        <>
        <h1> Rahul kumar </h1>
        <Incriement number={count} setnumber={setcount}/>                              {/*{Here props is send} */}
        <Decriement number={count} setnumber={setcount}/>
        </>
    )
    
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);