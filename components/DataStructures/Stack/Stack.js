
import React, { PureComponent } from "react";
import { StyleSheet, ScrollView, Text, Image } from "react-native";

import * as Data from "resources/data/ru.json";
import * as Picture from "resources/pictures";

export default class Stack extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Data.DataStructures.Stack.Title,
    });

    render() {
        return (
            <ScrollView style={styles.root} contentContainerStyle={styles.content}>
                <Text>{Data.DataStructures.Stack.Term}</Text>
                <Image source={Picture.stack} style={styles.image} resizeMode="contain" />
                <Text style={styles.titleSmall}>{Data.DataStructures.Stack.Operations.Title}</Text>
                <Image source={Picture.stack_op} style={styles.image_operations} resizeMode="contain" />
                <Text>{Data.DataStructures.Stack.Operations.Push}</Text>
                <Text>{Data.DataStructures.Stack.Operations.Pop}</Text>
                <Text>{Data.DataStructures.Stack.Operations.Peek}</Text>
            </ScrollView>
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
