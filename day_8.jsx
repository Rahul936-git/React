import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PassWordGenrator(){

    //state variable
    const [Password , setPassword]=useState("");
    const [length , setLength]=useState(20);
    const [numberChanged,setNumberChanged]=useState(false);
    const [charChanged,setCharChanged]=useState(false);


    const genratepassword = useCallback(()=>{  // useCallback does not work until atleast one of its dependicies will change otherwise its remain same, Here useCallback is closure

         let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if(numberChanged){
                str+="0123456789";
            }
            if(charChanged){
                str+="`~!@#$%^&*()_+{}[]:;/?><,.";
            }

            let updatePassword="";

            for(let i=0;i<=length;i++){
               updatePassword += str[Math.floor(Math.random()*str.length)];
            }
            setPassword(updatePassword);
    },[length,numberChanged,charChanged])  // [] --> this is function dependencies array decide when this function is created

            // genratepassword();                                  this goes infinite loop , to prevent this useeffect function as it render in last

            useEffect(()=>{
                genratepassword();
            // },[length,numberChanged,charChanged]);
            },[genratepassword]);

    return(

        <>
        <h1>Password: {Password}</h1>
        <div className="second">
            
        <label><input type="range" min={5} max={25} value={length} onChange={(e)=>setLength(e.target.value)}/> Length is ({length})</label>

        <label><input type="checkbox" defaultChecked={numberChanged} onChange={()=>setNumberChanged(!numberChanged)}/>Number</label>
        <label><input type="checkbox" defaultChecked={charChanged} onChange={()=>setCharChanged(!charChanged)} />Character</label>
           
        </div>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<PassWordGenrator/>);