
// our custom Hook

import { useState,useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurant2=(resId)=>{
    const[resInfo,setresInfo] = useState(null) ;
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async()=>{
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
       //  console.log(json.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR);
         setresInfo(json.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR)
    };

    return resInfo ;
}

export default useRestaurant2 ;