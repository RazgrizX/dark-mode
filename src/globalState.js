import React, { createContext } from "react";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

export const SET_DARK_MODE = "SET_DARK_MODE";
export const SET_ROUTE = "SET_ROUTE";

export const DARK_MODE_LS_KEY = "dark-mode-enabled";

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_DARK_MODE: {
      if (payload) {
        document.documentElement.classList.add("dark-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
      }

      localStorage.setItem(DARK_MODE_LS_KEY, payload);

      return {
        ...state,
        darkModeEnabled: payload,
      };
    }

    case SET_ROUTE: {
      return {
        ...state,
        route: payload,
      };
    }

    default:
      return state;
  }
};

function GlobalState(props) {
  const { initialState, dispatch } = props;

  return (
    <GlobalStateContext.Provider value={initialState}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {props.children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export default GlobalState;
