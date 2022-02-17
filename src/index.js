import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import Routes from "./routes";
import GlobalState, { DARK_MODE_LS_KEY, reducer, SET_DARK_MODE } from "./globalState";

ReactDOM.render(
  <AppContainer>
    <GlobalStateWrapper>
      <Routes />
    </GlobalStateWrapper>
  </AppContainer>,
  document.getElementById("root"),
);

function GlobalStateWrapper(props) {
  const INITIAL_STATE = {
    darkModeEnabled: false,
    route: ["app"],
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const cachedDarkMode = localStorage.getItem(DARK_MODE_LS_KEY) === "true" ? true : false;
    if (cachedDarkMode) {
      dispatch({ type: SET_DARK_MODE, payload: true });
    }
  }, [dispatch]);

  return (
    <GlobalState initialState={state} dispatch={dispatch}>
      {props.children}
    </GlobalState>
  );
}
