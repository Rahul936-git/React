import { useEffect, useState } from "react";

function Body(){

    const[profile,setprofile]=useState([]);   // state variable
    const[Numberofprofile,setNumberofprofile]=useState("");
    const[Nameofprofile,setNameofprofile]=useState("");

    async function Genrateprofile(count){   // async function so we can await
        try{
            const random_no=Math.floor(Math.random()*189644544);

            const response = await  fetch(`https://api.github.com/users?since=${random_no}&per_page=${count}`);  // return promise
            const data =await response.json();

            setprofile(data);
        }
        catch(err){
            console.log(err);
        }
    }

    async function SearchByName(name){

        try{
            // const response=await fetch(`https://api.github.com/search/users?q=${name}`);   // https://api.github.com/search/users?q=Rahul936-git
               const response= await fetch(`https://api.github.com/users/${name}`);
               const data=await response.json();

            // setprofile(data.items);               
               setprofile([data]);
        }
        catch(err){
            console.log(err);
        }

        
    }

    useEffect(()=>{
        Genrateprofile(10);
    },[]);

    return(
        <div className="but">

            <div className="club">

        <div className="inp">
            <input type="number" className="input" placeholder="search number" value={Numberofprofile} onChange={(e)=>setNumberofprofile(e.target.value)}></input>  {/* here (e) is event object which already conatin every information */}
            <button onClick={()=>Genrateprofile(Number(Numberofprofile))}>search profile</button>
        </div>

        <div className="inp1">
            <input type="text" name="" className="input" placeholder="search name" value={Nameofprofile} onChange={(e)=>setNameofprofile(e.target.value)}></input>
            <button onClick={()=>SearchByName(Nameofprofile)} >search</button>
        </div>
            
            </div>

        <div className="cardholder">

            {profile.map((value)=>{      // profile.map return array

            return (<div key={value.id} className="cards">
                <img src={value.avatar_url} alt="image" />
                <h2>{value.login}</h2>
                <a href={value.html_url} target="_blank" className="Plink">Profile</a>
            </div>)

            })}

        </div>
        </div>
    )
}

export default Body;