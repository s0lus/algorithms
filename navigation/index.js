
import { createStackNavigator } from "react-navigation";

import { Home, DataStructures, Algorithms, Array, Queue, Stack, Set } from "components";

export const RootNavigation = createStackNavigator(
    {
        Home,
        DataStructures,
        Algorithms,
        Array,
        Queue,
        Stack,
        Set,
    },
    {
        initialRouteName: "Home",
        cardStyle: {
            backgroundColor: "#FFFFFF",
        }
    }
);
