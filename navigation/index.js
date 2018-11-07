
import { createStackNavigator } from "react-navigation";

import { Home, DataStructures, Algorithms, Array, Queue, Stack, Set, Map, HashTable, LinkedList } from "components";

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
        LinkedList,
    },
    {
        initialRouteName: "Home",
        cardStyle: {
            backgroundColor: "#FFFFFF",
        }
    }
);
