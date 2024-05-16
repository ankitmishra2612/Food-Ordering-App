import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants"; 
import UserContext from "../utils/UserContext";

const Card = (props) => {
  const { isOpen, locality, name, cuisines, cloudinaryImageId, avgRating, costForTwo } = props;
 
  const{loggedInUser} = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-300 hover:bg-gray-500 rounded-2xl">
      <img className="rounded-lg" alt="card-photo" src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-lg">{name}</h2>
      <h4>Location :- {locality}</h4>
      <h4>{cuisines.join(' , ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

const PromotedCard = (Card) => {
  return (props) => {  
    return (
      <div>
        <label className=" text-white  absolute bg-black mx-2 ">OPEN NOW</label>
        <Card {...props} />
      </div>
    );
  };
};

export const WrapCard = PromotedCard(Card)// Wrapping Card component with PromotedCard HOC

export default Card ;
