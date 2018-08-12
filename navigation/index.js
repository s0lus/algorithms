
import { createStackNavigator } from 'react-navigation';

import { Home } from 'components';

export const RootNavigation = createStackNavigator(
    {
        Home
    },
    {
        initialRouteName: 'Home'
    }
);
