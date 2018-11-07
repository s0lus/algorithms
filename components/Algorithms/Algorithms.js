
import React, { PureComponent } from "react";
import { Text } from "react-native";

import { i18n } from "utils";

export default class Algorithms extends PureComponent {
    render() {
        return (
            <Text>
                {i18n("Algorithms.Title")}
            </Text>
        );
    }
}
