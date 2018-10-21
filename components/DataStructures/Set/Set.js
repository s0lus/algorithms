
import React, { PureComponent } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

import * as Data from "resources/data/ru.json";

export default class Set extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Data.DataStructures.Set.Title,
    });

    render() {
        return (
            <SafeAreaView style={styles.root}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text>
                        {Data.DataStructures.Set.Term}
                    </Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    content: {
        padding: 10,
    }
});
