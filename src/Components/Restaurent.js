 import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Shimmer from "./Shimmer";


const Restaurant = ()=>{
    let { resId } = useParams(); // resID kuch bhi da skta h 
    const[resInfo,setresInfo] = useState(null) ;
    useEffect(()=>{
        fetchData();
    },[]);
 
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
       //  console.log(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants[4].info);
         setresInfo(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle)
    };

  return (resInfo==null) ? (<Shimmer/>) :
     (
        <div className="Menu"> 
            <h1>MENU</h1>
         {resInfo?.restaurants.map((a)=>(
         <div key={a?.info?.id}>
            <h3>{a?.info?.name}</h3> {a?.info?.costForTwo}
         </div> ))} 

         {/* <h1>{resInfo?.restaurants[1]?.info?.name}</h1>
         <h1>{resInfo?.restaurants[2]?.info?.name}</h1>
         <h1>{resInfo?.restaurants[3]?.info?.name}</h1>
         <h1>{resInfo?.restaurants[4]?.info?.name}</h1>
         <h1>{resInfo?.restaurants[5]?.info?.name}</h1> */}
          <h1>Restaurant Id : {resId}</h1>
        
        </div>
    )
}

export default Restaurant ;

// how to put map function 
//  {(ARRAYNAME).map(()=>(
//    andar m curve bracket aata h 
//  ))}