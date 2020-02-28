// eslint-disable-next-line import/named
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import DefaultScreen from "../screens/DefaultScreen";

const RootStack = createStackNavigator(
    {
        DefaultScreen: {
            screen: DefaultScreen,
            /* navigationOptions: ({}) => ({
                header: null,
            }), */
        },
    },
    {initialRouteName: "DefaultScreen"},
);
export const AppContainer = createAppContainer(RootStack);
