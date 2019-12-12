import React from "react";
import {colors} from "../../utils/colors";
import {TouchableOpacity, Text} from "react-native";
import PropTypes from "prop-types";

const Button = ({text="", onPress = () => {}, buttonStyle = {}, textStyle={}, textVisibility=true, children}) => {
    const styles={
        buttonStyle:{
            height:70,
            width:160,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:colors.orange,
            borderRadius: 5,
            borderColor:"black",
            borderWidth:0,
            borderBottomWidth:0,
            borderBottomColor:null,
            ...buttonStyle
        },
        labelStyle:{
            color: "black",
            textAlign: "center",
            fontSize:20,
            ...textStyle
        }
    };
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress()}
            style={styles.buttonStyle}>
            {textVisibility && 
            <Text style={styles.labelStyle}>
                {text}
            </Text>}
            {children}
        </TouchableOpacity>
    );
};

Button.propTypes = {
    text:PropTypes.string,
    buttonStyle:PropTypes.object,
    textStyle:PropTypes.object,
    onPress:PropTypes.func,
    textVisibility:PropTypes.bool,
    children:PropTypes.element
};

export default Button;
