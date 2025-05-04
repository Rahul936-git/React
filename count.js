import React,{useState,useEffect} from "react";

function Count(){

    const [count,setcount]=useState(0);

    return(
    <div className="counting">
        <h1>counter is: {count}</h1>
        <button onClick={() => setcount(count + 1)}>Increment</button>
        <button onClick={() => setcount(count - 1)}>Decrement</button>
    </div>
    );
}

export default Count;