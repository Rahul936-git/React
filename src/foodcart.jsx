import { useState } from "react";
import { addItem , removeItem } from "./slice";
import { useDispatch } from "react-redux";

function FoodCard({value}){

    const [incart,setIncart] = useState(false);

    const dispatch =useDispatch(); 
        
            function click(){
                if(incart){
                    dispatch(removeItem());
                    setIncart(false);
                }
                else{
                    dispatch(addItem());
                    setIncart(true);
                }
            }

            return(
                <>
                <h1>{value.foodItems}</h1>
                <h1>{value.name}</h1>
                <h2>{value.price}</h2>
                <button onClick={click}>{incart?"Remove":"Add"}</button>
                </>
            )
}

export default FoodCard;