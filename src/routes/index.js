import Home from "./App";
import AnotherPage from "./AnotherPage";
import React, { useContext } from "react";
import { GlobalDispatchContext, GlobalStateContext, SET_ROUTE } from "../globalState";

// Use something like react-router-dom to manage multiple pages/routes
// Here is a simples alternative, route can come from state

function Router() {
  const globalState = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  if (globalState.route[0] === "app") {
    return <Home />;
  } else if (globalState.route[0] === "another-page") {
    return <AnotherPage />;
  } else {
    console.error("No such page found");
    dispatch({ type: SET_ROUTE, payload: ["app"] });
    return null;
  }
}

export default Router;
