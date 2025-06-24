import { useEffect, useState } from "react";
import {useParams} from "react-router";             // useparam is used to fetch data 

function GitHUB(){

    // const data1 = useParams();
    // console.log(data1);

    const {name}=useParams();
    // console.log(name);
    const [profile,setProfile]=useState(null);

    async function fetchUser(){
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data2=await response.json();
        // now after useEffect function call
        setProfile(data2);
    }

    // now use useEffect to call this fetchUser function 

    useEffect(()=>{
        fetchUser();
    },[]);



    return(
        <>
        <h1>MY github profile</h1>
        <div>
            <img src={profile?.avatar_url} />
            <h2>{profile?.login}</h2>
        </div>
        </>
    )
}

export default GitHUB;