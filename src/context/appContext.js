import React, { createContext, useState, useContext } from "react";

const AppContext = createContext(null); //create context object and put it in the AppContext constant
export const useAppContext = () => {
  //hook to call the context in a simple way
  const context = useContext(AppContext); //it acceptes the context object created by createContext and returns context values from the provider props
  if (context === undefined) {
    throw new Error("NO");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [booking, setBooking] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const tabHandler = (s) => {
    switch (s) {
      case "booking":
        setBooking(true);
        setDashboard(false);
        break;

      case "dashboard":
        setDashboard(true);
        setBooking(false);
        break;
      default:
        setDashboard(true);
    }
  };

  return (
    <AppContext.Provider value={{ booking, dashboard, tabHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

//createContext to create the context in the constant
//useContext to call the context inside the hook when it's called
