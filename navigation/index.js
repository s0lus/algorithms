
import { createStackNavigator } from "react-navigation";

import { Home, DataStructures, Algorithms, Array, Queue, Stack, Set, Map } from "components";

export const RootNavigation = createStackNavigator(
    {
        Home,
        DataStructures,
        Algorithms,
        Array,
        Queue,
        Stack,
        Set,
        Map,
    },
    {
        initialRouteName: "Home",
        cardStyle: {
            backgroundColor: "#FFFFFF",
        }
    }
);
