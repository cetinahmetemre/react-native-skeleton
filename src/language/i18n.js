import I18n from "react-native-i18n";
import en from "./locales/en";
import tr from "./locales/tr";
import AsyncStorage from "@react-native-community/async-storage";

I18n.fallbacks = true;
I18n.translations = {
    tr,
    en,
};

I18n.changeLangFromStorage = async () => {
    try {
        let locale = await AsyncStorage.getItem("locale");
        if (locale === null) {
            await AsyncStorage.setItem("locale", "en");
            locale = "en";
        }
        I18n.locale = locale;
    }
    catch (error) {
        I18n.locale = "en";
    }
};

I18n.changeLangFromStorage();

export default I18n;
