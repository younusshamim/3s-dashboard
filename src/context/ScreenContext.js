import React, { createContext, useContext } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
const ScreenContext = createContext();

const ScreenContextProvider = ({ children }) => {
  const handle = useFullScreenHandle();

  return (
    <ScreenContext.Provider value={{ handle }}>
      <FullScreen handle={handle}>
        <div
          style={{
            background: "white",
          }}
        >
          {children}
        </div>
      </FullScreen>
    </ScreenContext.Provider>
  );
};

const useScreenContext = () => {
  return useContext(ScreenContext);
};

export { ScreenContextProvider, useScreenContext };
