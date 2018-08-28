
import { createStackNavigator } from 'react-navigation';

import { Home, DataStructures, Algorithms, Array } from 'components';

export const RootNavigation = createStackNavigator(
    {
        Home,
        DataStructures,
        Algorithms,
        Array,
    },
    {
        initialRouteName: 'Home'
    }
);
