// import React, { useEffect } from 'react';
// import { Outlet, Redirect, useLocation, useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

// function PrivateRouts() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const history = useHistory();
//   const location = useLocation(); 

//   useEffect(() => {
//     if (isAuthenticated && location.pathname === "/") {
//       history.push("/home");
//     }
//   }, [isAuthenticated, location.pathname, history]);

//   return isAuthenticated ? <Outlet /> : <Redirect to="/login" />; 
// }

// export default PrivateRouts;

import {Redirect, Route} from "react-router-dom";
import React from 'react'
import { useSelector } from 'react-redux';


const PrivateRouts = ({children}) =>{
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log("Redux State - isAuthenticated:", isAuthenticated);

    if(!isAuthenticated){
        return <Redirect to="/signin" />;
    }

    return children;
}

export default PrivateRouts
