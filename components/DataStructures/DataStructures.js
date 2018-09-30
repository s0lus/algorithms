
import React, { PureComponent } from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import { showArrayScreen, showQueueScreen, showStackScreen } from "navigation/actions";

import * as Data from "resources/data/ru.json";

export default class DataStructures extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Data.DataStructures.Title,
        headerBackTitle: null,
    });

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.dataStructure} onPress={showArrayScreen}>
                    <Text>{Data.DataStructures.Array.Title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataStructure} onPress={showQueueScreen}>
                    <Text>{Data.DataStructures.Queue.Title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataStructure} onPress={showStackScreen}>
                    <Text>{Data.DataStructures.Stack.Title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataStructure}>
                    <Text>{Data.DataStructures.Set.Title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataStructure}>
                    <Text>{Data.DataStructures.Map.Title}</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    test: {
    },
    dataStructure: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#000000",
        borderRadius: 8,
        height: 80,
        marginHorizontal: 25,
    },
});
