import React, { Component, useState } from "react";
import { useParams } from 'react-router-dom';
import Shimmer from "./Shimmer";
import useRestaurant2 from "../utils/useRestaurant2";
import RestaurantMenu from "./RestaurantMenu";

const Restaurant = ()=>{
    let { resId } = useParams(); // resID kuch bhi da skta h 
    
    const resInfo = useRestaurant2(resId);  // our custom Hook
    const[showIndex,setshowIndex] = useState();
     //console.log(resInfo); 
      const categories = resInfo?.cards?.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     // console.log(categories);  
      
      return(
        <div className="text-center">
          <h1 className="font-bold my-6 text-2xl">Menu</h1>

            {/* categories accordion  */}
            { categories?.map((element,index)=>(
                 // Controlled Component
                  <RestaurantMenu 
                    key={element?.card?.card.title}
                    data={element?.card?.card} 
                    show={index ===showIndex }
                    setshowIndex={()=>setshowIndex(index)}
                    />
            ))}

        </div>
     )
     
}
// Restaurant has power to control RestaurantMenu Component as it has its state Component
// so it is a controlled Component
// Lifting the state up 

 // how to put map function 
//  {(ARRAYNAME).map(()=>(
//    andar m curve bracket aata h 
//  ))}


export default Restaurant ;

// card?.card? is same as card?.["card"] (new way of Writing object) 
