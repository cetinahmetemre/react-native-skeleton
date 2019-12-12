import React from "react";
import MainContextProvider from "./MainContext";
import PropTypes from "prop-types";
const GeneralProvider = (props) => {
    return (
        <MainContextProvider>
            {props.children}
        </MainContextProvider>
    );
};

GeneralProvider.propTypes = {
    children:PropTypes.element
};

export default GeneralProvider;
