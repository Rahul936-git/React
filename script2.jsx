import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function App(){

    const [count,setCount] = useState(0);
    // let Money=0;                          // normal variable not state variable
    const Money = useRef(0);                 // useRef does not let rerender function again
    // console.log(Money);
    // console.log(Money.current);

    // return(
    //     <>
    //     <h1>Counter is :{count}</h1>
    //     <button onClick={()=>setCount(count+1)}>Increment</button>

    //     <h1>Money is :{Money}</h1>
    //     {/* <button onClick={()=>Money+=1}>Increment</button> */}
    //     <button onClick={()=>{Money+=1
    //         console.log(Money);}
    //     }>Increment</button>
    //     </>
    // )

    return(
        <>
        <h1>Counter is :{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <h1>Money is :{Money.current}</h1>
        {/* <button onClick={()=>Money.current+=1}>Increment</button> */}
        <button onClick={()=>{Money.current+=1
            console.log(Money.current);}
        }>Increment</button>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);