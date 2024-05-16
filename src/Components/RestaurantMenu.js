import { useState } from "react";
import ItemList from "./ItemList";

// Made our Accordion 
const RestaurantMenu=({data,show,setshowIndex})=>{
    const handleClick =()=>{
        setshowIndex() ;
    };
    return(
        <div>
            {/* Header */}
          <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
             <div className="flex justify-between cursor-pointer" onClick={handleClick}>
             <span>{data.title} ({data.itemCards.length})
             </span>
             <span>⬇️</span>
             </div> 
               {show && <ItemList items={data?.itemCards}/>}
          </div>
        </div>
    )
}

export default RestaurantMenu ;