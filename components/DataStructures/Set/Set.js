
import React, { PureComponent } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

import {i18n} from "utils";


export default class Set extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: i18n("DataStructures.Set.Title"),
    });

    render() {
        return (
            <SafeAreaView style={styles.root}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text>
                        {i18n("DataStructures.Set.Term")}
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
