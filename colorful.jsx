import React, {useEffect,useState} from "react";
  
  function Colorful(){
    // function Colorful({name}){
  
  const [color,setColor] = useState('seagreen');  // here we use state variable
    // document.body.style.backgroundColor = color;

    useEffect(()=>{          // useEffect(callback function , dependency)  // useEffect always executed in last
        document.body.style.backgroundColor=color;
    },[color]);

    return(
        <>
        <h1>Background color changer</h1>
        <div className="but">
            <button style={{backgroundColor:'red',color:'white'}} onClick={()=>setColor('red')}>Red</button>
            <button style={{backgroundColor:'green',color:'white'}} onClick={()=>setColor('green')}>Green</button>
            <button style={{backgroundColor:'yellow',color:'black'}} onClick={()=>setColor('yellow')}>Yellow</button>
            <button style={{backgroundColor:'Orange',color:'black'}} onClick={()=>setColor('Orange')}>orange</button>
            <button style={{backgroundColor:'blue',color:'white'}} onClick={()=>setColor('blue')}>Blue</button>
            <button style={{backgroundColor:'gray',color:'white'}} onClick={()=>setColor('gray')}>Grey</button>      {/* By,using setColor ,we re-render{call the function again} the Main function with useState{'new color'} */}
        </div>
        </>
    )

}

// export default Colorful;
export default React.memo(Colorful);  // React.memo is a higher-order component that memoizes the Colorful component — meaning:✅ It prevents re-rendering unless its props change.