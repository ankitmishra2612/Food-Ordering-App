
// const Body = () => {
//     // Assuming restaurantList is defined somewhere in your code
//     const cards = []; // Initialize an empty array to store Card components
//     // Loop through the restaurantList array and push Card components to the cards array
//     for (let i = 0; i < restaurantList.length; i++) {
//         cards.push(<Card key={i} resData={restaurantList[i]} />);
//     }

//     return (
//         <div className="Body">
//             <div className="search">Search</div>
//             <div className="Res-Container">
//                 {cards}
//             </div>
//         </div>
//     );
// }; by using for loops 

import React from "react";
import Card from "./Card" ; // if both ARE IN same directory no need to add components 
import restaurantList from "../utils/mock";
import { useState } from "react";

// RestaurantList is JSON Data for displaying cards

const Body = ()=>{
    
    const[listofResturent,setlistofRestaurent] = useState(restaurantList);
  
    return (
        <div className="Body">
            <div className="search">
               <button className="search-btn"  
               onClick={()=>{ 
                 const filteredlist = listofResturent.filter((a)=>a.data.avgRating>4)
                setlistofRestaurent(filteredlist);
            }}
               >Top Rated Restaurent</button> 
                </div>
        <div className = "Res-Container">
            {
                listofResturent.map(a=> <Card key={a.id} resData={a}/>)
            }
            
            </div>

        </div>
    )
}
export default Body ;