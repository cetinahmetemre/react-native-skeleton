import React from "react";
import {AppContainer} from "./navigation/Navigation";
import GeneralProvider from "./context/GeneralProvider";

const App = () => {
  
    return (
        <GeneralProvider>
            <AppContainer/>
        </GeneralProvider>
    );
};
export default App;
