import React from "react";
import {View} from "react-native";
import {Colors} from "../../utils/Colors";
import PropTypes from "prop-types";


const Container = ({children, horizontal, style, onLayout}) => {
    const styles = {
        container: {
            flex: 1,
            flexDirection: horizontal ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.background,
            ...style
        },
    };
    
    return (
        <View style={styles.container} onLayout={onLayout}>
            {children}
        </View>
    );
};

Container.propTypes = {
    children: PropTypes.array,
    horizontal: PropTypes.any,
    style: PropTypes.object,
    onLayout: PropTypes.func
};

export default Container;
