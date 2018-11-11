
import React, { PureComponent } from "react";
import { StyleSheet, ScrollView, Text, Image } from "react-native";
import { SafeAreaView } from "react-navigation";

import {i18n} from "utils";

import * as Picture from "resources/pictures";

export default class Stack extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: i18n("DataStructures.Stack").Title,
    });

    render() {
        return (
            <SafeAreaView style={styles.root}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text>{i18n("DataStructures.Stack.Term")}</Text>
                    <Image source={Picture.stack} style={styles.image} resizeMode="contain"/>
                    <Text style={styles.titleSmall}>{i18n("DataStructures.Stack.Operations.Title")}</Text>
                    <Image source={Picture.stack_op} style={styles.image_operations} resizeMode="contain"/>
                    <Text>
                        {i18n("DataStructures.Stack.Operations.Push")}
                        {i18n("DataStructures.Stack.Operations.Pop")}
                        {i18n("DataStructures.Stack.Operations.Peek")}
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
    image: {
        width: "100%",
        marginVertical: 15,
    },
    image_operations: {
        width: "100%",
        height: 300,
    },
    content: {
        padding: 10,
    },
    titleSmall: {
        fontSize: 16,
        textAlign: "center",
    },
});
