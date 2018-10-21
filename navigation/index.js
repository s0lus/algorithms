
import { createStackNavigator } from "react-navigation";

import { Home, DataStructures, Algorithms, Array, Queue, Stack, Set, Map, HashTable } from "components";

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
        HashTable,
    },
    {
        initialRouteName: "Home",
        cardStyle: {
            backgroundColor: "#FFFFFF",
        }
    }
);
