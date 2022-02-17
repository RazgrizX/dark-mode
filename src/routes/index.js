import Home from "./App";
import AnotherPage from "./AnotherPage";
import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

// Use something like react-router-dom to manage multiple pages/routes
// Here is a simples alternative, route can come from state

function Router() {
  const [route, setRoute] = useState(["app"]);
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();

  if (route[0] === "app") {
    return (
      <Home
        darkModeEnabled={darkModeEnabled}
        setRoute={newRoute => setRoute(newRoute)}
        setDarkModeEnabled={mode => {
          setDarkModeEnabled(mode);
        }}
      />
    );
  } else if (route[0] === "another-page") {
    return <AnotherPage setRoute={setRoute} />;
  } else {
    console.error("No such page found");
    setRoute["app"];
    return null;
  }
}

export default Router;
