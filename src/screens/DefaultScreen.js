import React, {useState, useContext} from "react";
import {Text, Dimensions} from "react-native";
import Button from "../components/commons/Button";
import TextInput from "../components/commons/TextInput";
import I18n from "../language/i18n";
import {MainContext} from "../context/MainContext";
import Container from "../components/commons/Container";

const DefaultScreen = () => {
    const {datas, dispatch} = useContext(MainContext);
    const [text, setText] = useState();
    const [response, setResponse] = useState(Dimensions.get("window"));
    //I18n.locale = datas.language.toString();
    I18n.locale = "tr";

    return (
        <Container onLayout={()=>setResponse(Dimensions.get("window"))}>
            <Text>{I18n.t("Shopping")}</Text>
            <Button text="deneme" buttonStyle={{width:response.width*0.8}}/>
            <TextInput value={text} textColor="red" label="selam" inputWidth={response.width*0.8}/>
        </Container>
    );
};

export default DefaultScreen;