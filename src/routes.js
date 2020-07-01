import React, { lazy, Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LoadingScreen from "./Components/LoadingScreen";
function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Redirect exact from="/" to="/home" />
  
        <Route 
            exact 
            path="/home" 
            component={lazy(() => import("./Screens/Home"))}

            />
             <Route 
            exact 
            path="/game" 
            component={lazy(() => import("./Screens/BlackJack"))}

            />
     
      </Switch>
    </Suspense>
  );
}

export default Routes;
