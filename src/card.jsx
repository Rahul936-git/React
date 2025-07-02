import { useState } from "react";
import FoodCard from "./foodcart";


const foodItems = [
  { id: 1, name: "Pizza", price: 250 },
  { id: 2, name: "Burger", price: 120 },
  { id: 3, name: "Pasta", price: 200 },
  { id: 4, name: "Samosa", price: 30 },
  { id: 5, name: "Sandwich", price: 80 },
  { id: 6, name: "Fried Rice", price: 180 },
  { id: 7, name: "Noodles", price: 160 },
  { id: 8, name: "Paneer Tikka", price: 220 },
  { id: 9, name: "Spring Roll", price: 90 },
  { id: 10, name: "Dosa", price: 100 },
  { id: 11, name: "Idli", price: 60 },
  { id: 12, name: "Vada Pav", price: 40 },
  { id: 13, name: "Biryani", price: 240 },
  { id: 14, name: "Chole Bhature", price: 150 },
  { id: 15, name: "Pav Bhaji", price: 130 },
  { id: 16, name: "Momos", price: 110 },
  { id: 17, name: "Aloo Paratha", price: 70 },
  { id: 18, name: "Chicken Curry", price: 260 },
  { id: 19, name: "Fish Fry", price: 300 },
  { id: 20, name: "Gulab Jamun", price: 50 }
];

console.log(foodItems);


function Card(){
    
    return(
        <div id="card">
            {
                foodItems.map((value)=>{

                    return(
                        <div key={value.id}  className="card_box">
                            <FoodCard value={value}></FoodCard>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;