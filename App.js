
import React from 'react';
import { RootNavigation } from 'navigation';

import { NavigationService } from 'services';

export default class App extends React.Component {
    render() {
        return (
            <RootNavigation
                ref={
                    (navigationRef) => {
                        NavigationService.setTopLevelNavigator(navigationRef)
                    }
                }
            />
        );
    }
}
