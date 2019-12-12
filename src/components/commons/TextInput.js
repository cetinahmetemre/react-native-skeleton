import React from "react";
import {TextField} from "react-native-material-textfield";
import PropTypes from "prop-types";
import {Colors} from "../../utils/Colors";

const TextInput = ({
    label,
    title,
    value = "",
    onChangeText = () => {},
    lineWidth = 0.5,
    tintColor = Colors.orange,
    baseColor = "black",
    textColor = "black",
    error,
    errorColor = "rgb(213, 0, 0)",
    disabled = false,
    editable = true,
    inputWidth = "80%",
    labelFontSize = 16,
    maxLength = 30,
    characterRestriction = 20,
}) => {

    return (
        <TextField
            containerStyle={{width: inputWidth}}
            title={title}
            label={label}
            value={value}
            onChangeText={onChangeText}
            lineWidth={lineWidth}
            tintColor={tintColor}
            baseColor={baseColor}
            error={error}
            errorColor={errorColor}
            disabled={disabled}
            editable={editable}
            textColor={textColor}
            labelFontSize={labelFontSize}
            maxLength={maxLength}
            characterRestriction={characterRestriction}
        />
    );
};

TextInput.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    tintColor: PropTypes.string,
    baseColor: PropTypes.string,
    error: PropTypes.string,
    errorColor: PropTypes.string,
    maxLength: PropTypes.number,
    characterRestriction: PropTypes.number,
    disabled: PropTypes.bool,
    editable: PropTypes.bool,
    lineWidth: PropTypes.number,
    onChangeText: PropTypes.func,
    title: PropTypes.string,
    textColor: PropTypes.string,
    inputWidth: PropTypes.number,
    labelFontSize: PropTypes.number,
};

export default TextInput;
