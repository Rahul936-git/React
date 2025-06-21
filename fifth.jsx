// import { useContext } from "react";
// import GlobalContex from "./Global";

// function Fifth(){

//     const data=useContext(GlobalContex);

//     return(
//         // <h1>Fifth</h1>   // After changing into the fifth.jsx
//         <h1>Fifth {data}</h1>

//     )
// }

// export default Fifth;




// *************************** After shifting fifth inside**********************************************//


import { useContext } from "react";
import GlobalContex from "./Global";

function Fifth(){

    // const data=useContext(GlobalContex);     // // After shifting <Fifth/> inside  change data into count,setcount
    const {count,setcount}=useContext(GlobalContex);


    return(
        // <h1>Fifth</h1>   // After changing into the fifth.jsx
        // <h1>Fifth {data}</h1>   //  // // After shifting <Fifth/> inside  change data into count,setcount
        <h1>Fifth {count}</h1>

    )
}

export default Fifth;
