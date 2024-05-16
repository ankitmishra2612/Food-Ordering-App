import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
   const [info,setinfo]= useState(true);
    
   useEffect(()=>{
       window.addEventListener("offline",()=>{
         setinfo(false);
       })
       window.addEventListener("online",()=>{
         setinfo(true);
       })
   },[])

    return info ;
}

export default useOnlineStatus ;