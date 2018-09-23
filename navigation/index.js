
import { createStackNavigator } from "react-navigation";

import { Home, DataStructures, Algorithms, Array, Queue } from "components";

export const RootNavigation = createStackNavigator(
    {
        Home,
        DataStructures,
        Algorithms,
        Array,
        Queue,
    },
    {
        initialRouteName: "Home",
        cardStyle: {
            backgroundColor: "#FFFFFF",
        }
    }
);
