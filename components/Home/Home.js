
import React, { PureComponent } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { i18n } from "utils";

import * as actions from "navigation/actions";

export default class Home extends PureComponent {
    static navigationOptions = () => ({
        header: null,
    });

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.top} onPress={actions.showAlgorithmsScreen}>
                    <Text style={styles.text}>
                        {i18n("Algorithms.Title")}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottom} onPress={actions.showDataStructuresScreen}>
                    <Text style={styles.text}>
                        {i18n("DataStructures.Title")}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-around",
        alignItems: "center",
    },
    top: {
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#000000",
        height: 100,
        width: "85%",
    },
    bottom: {
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#000000",
        height: 100,
        width: "85%",
    },
    text: {
        textAlign: "center",
    }
});
