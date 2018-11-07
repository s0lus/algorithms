
import React, { PureComponent } from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import {
    showArrayScreen,
    showHashTablesScreen,
    showMapScreen,
    showQueueScreen,
    showSetScreen,
    showStackScreen,
    showLinkedListScreen,
} from "navigation/actions";

import {i18n} from "utils";

export default class DataStructures extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: i18n("DataStructures.Title"),
        headerBackTitle: null,
    });

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.dataStructure} onPress={showArrayScreen}>
                    <Text>{i18n("DataStructures.Array.Title")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataStructure} onPress={showQueueScreen}>
                    <Text>{i18n("DataStructures.Queue.Title")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataStructure} onPress={showStackScreen}>
                    <Text>{i18n("DataStructures.Stack.Title")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataStructure} onPress={showSetScreen}>
                    <Text>{i18n("DataStructures.Set.Title")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataStructure} onPress={showMapScreen}>
                    <Text>{i18n("DataStructures.Map.Title")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataStructure} onPress={showHashTablesScreen}>
                    <Text>{i18n("DataStructures.HashTables.Title")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataStructure} onPress={showLinkedListScreen}>
                    <Text>{i18n("DataStructures.LinkedList.Title")}</Text>
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
