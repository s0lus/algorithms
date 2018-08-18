
import { createStackNavigator } from 'react-navigation';

import { Home, DataStructures, Algorithms } from 'components';

export const RootNavigation = createStackNavigator(
    {
        Home,
        DataStructures,
        Algorithms,
    },
    {
        initialRouteName: 'Home'
    }
);
