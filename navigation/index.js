
import { createStackNavigator } from "react-navigation";

import { Home, DataStructures, Algorithms, Array, Queue, Stack } from "components";

export const RootNavigation = createStackNavigator(
    {
        Home,
        DataStructures,
        Algorithms,
        Array,
        Queue,
        Stack,
    },
    {
        initialRouteName: "Home",
        cardStyle: {
            backgroundColor: "#FFFFFF",
        }
    }
);
