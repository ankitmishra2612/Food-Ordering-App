import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Default User" ,
});

export default UserContext ;


// two ways of using UserContext one is hook and another one is 
// for class based components <UserContext.Consumer>{} </UserContext.Consumer>

// default ki jgh naam aa jaya ga jo jo beech m ho ga like (header,outlet)
// <UserContext.Provider value={{loggedInUser : userInfo}}>
// <div className="App">
//     <Header/>
//     <Outlet/> 
// </div>
// </UserContext.Provider>
