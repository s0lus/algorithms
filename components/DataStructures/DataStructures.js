
import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import * as Data from 'resources/data/ru.json';

export default class DataStructures extends PureComponent {
    render() {
        return (
            <Text>{Data.DataStructures.Title}</Text>
        )
    }
}
