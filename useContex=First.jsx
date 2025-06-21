// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// import Second from "./second";

// function App(){

//     const[count,setcount]=useState(99);

//     return(
//         <>
//         <h1> UseContex </h1>
//         <Second count={count} setcount={setcount}/>
//         </>
//     )

// }

// ReactDOM.createRoot(document.getElementById('UseContex')).render(<App></App>);




// // *************************** use of (GlobalContex) in same above code**********************************************//


// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// import Second from "./second";

// import GlobalContex from "./Global";
// // import { useContext } from "react";            // usecontext extract data from Global contex

// function App(){

//     const[count,setcount]=useState(199);  // how to put count and setcount inside Globalcontex ?

//     return(                              // => this is how we put count and setcount inside Globalcontex by Globalcontex.provider so that its children can also use it as well
//         <>                               
//         {/* <GlobalContex.Provider value={{counts:count,setCounts:setcount}}> */}
//         {/* <GlobalContex.Provider value={{count:count,setcount:setcount}}> */}
//         <GlobalContex.Provider value={{count,setcount}}>
//         <h1> UseContex {count}</h1>
//         {/* <Second count={count} setcount={setcount}/> */}   
//         <Second/> 
//         </GlobalContex.Provider>
//         </>
//     )

// }

// ReactDOM.createRoot(document.getElementById('UseContex')).render(<App></App>);




// // *************************** After importing fifth**********************************************//


// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Fifth from "./fifth";

// import Second from "./second";

// import GlobalContex from "./Global";
// // import { useContext } from "react";            // usecontext extract data from Global contex

// function App(){

//     const[count,setcount]=useState(199);  // how to put count and setcount inside Globalcontex ?

//     return(                              // => this is how we put count and setcount inside Globalcontex by Globalcontex.provider so that its children can also use it as well
//         <>   
//         <Fifth/>                            
//         {/* <GlobalContex.Provider value={{counts:count,setCounts:setcount}}> */}
//         {/* <GlobalContex.Provider value={{count:count,setcount:setcount}}> */}
//         <GlobalContex.Provider value={{count,setcount}}>
//         <h1> UseContex {count}</h1>
//         {/* <Second count={count} setcount={setcount}/> */}   
//         <Second/> 
//         </GlobalContex.Provider>
//         </>
//     )

// }

// ReactDOM.createRoot(document.getElementById('UseContex')).render(<App></App>);



// *************************** After shifting fifth inside**********************************************//


import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Fifth from "./fifth";

import Second from "./second";

import GlobalContex from "./Global";
// import { useContext } from "react";            // usecontext extract data from Global contex

function App(){

    const[count,setcount]=useState(199);  // how to put count and setcount inside Globalcontex ?

    return(                              // => this is how we put count and setcount inside Globalcontex by Globalcontex.provider so that its children can also use it as well
        <>   
        <Fifth/>
        {/* <GlobalContex.Provider value={{counts:count,setCounts:setcount}}> */}
        {/* <GlobalContex.Provider value={{count:count,setcount:setcount}}> */}
        <GlobalContex.Provider value={{count,setcount}}>       {/* step:2 provide data inside context.provider */}
            <Fifth/>                        {/* After shifting <Fifth/> inside now it has access only count,setcount */}
        <h1> UseContex {count}</h1>
        {/* <Second count={count} setcount={setcount}/> */}   
        <Second/> 
        </GlobalContex.Provider>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('UseContex')).render(<App></App>);



// First create a create context
// provide data inside context.provider     // // accesable only to its Descents or children
// Consume the context
