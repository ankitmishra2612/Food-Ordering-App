import React from "react";
import { CDN_URL } from "../utils/constants"; // if you are using named export 

const Card = (props)=>{
    const {resData} = props ;
    const {name,cuisines,avgRating,deliveryTime} = resData.data ; 
     // instead of writing resData.data.name we can create this   
    return (
         <div className="card">
             <img className="card-photo" 
              alt = "card-photo"
              src={CDN_URL}/>
           <h3>{name}</h3>
           <h4>{cuisines.join(',')}</h4>
           <h4>{avgRating}</h4>
           <h4>{deliveryTime}</h4>
         </div>
         
     )
};

export default Card ;