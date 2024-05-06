import React from "react";
import { CDN_URL } from "../utils/constants"; // if you are using named export 

export const Card = (props)=>{

   const {isOpen,locality,name,cuisines, cloudinaryImageId,avgRating,costForTwo} = props;
     // console.log(props);

     // instead of writing resData.data.name we can create this   
    return (
         <div className="card">
             <img className="card-photo" 
              alt = "card-photo"
              src={CDN_URL+ cloudinaryImageId}/>
           <h2>{name}</h2>
           <h4>Location :- {locality}</h4> 
           <h4>{cuisines.join(' , ')}</h4>
           <h4>{avgRating}</h4>
           <h4>{costForTwo}</h4>
         </div>
         
     )
};
