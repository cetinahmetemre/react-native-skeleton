import React, {createContext, useReducer} from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import {MainReducer} from "./MainReducer";

export const MainContext = createContext();

const MainContextProvider = (props) => {

    const [datas, dispatch] = useReducer(MainReducer, {});

    const dispatchExample = () =>{
        dispatch(
            {
                type: "SET_ALL_OF_THEM",
                payload:{
                    focusedObject: {}, 
                    selectedObject: "object", 
                    isAllCategory: "isAllCategory"
                }
            }
        );  
    };     

    return (
        <MainContext.Provider
            value={{
                datas, 
                dispatch,
            }}>
            {props.children}
        </MainContext.Provider>
    );
};

MainContextProvider.propTypes = {
    children:PropTypes.element
};

export default MainContextProvider;
