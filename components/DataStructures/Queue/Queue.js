
import React, { PureComponent } from "react";
import { ScrollView, Text, StyleSheet, Image } from "react-native";

import * as Picture from "resources/pictures";
import * as Data from "resources/data/ru.json";

export default class Queue extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Data.DataStructures.Queue.Title,
    });

    render() {
        return (
            <ScrollView style={styles.root} contentContainerStyle={styles.content}>
                <Text>
                    {Data.DataStructures.Queue.Term}
                </Text>
                <Image source={Picture.queue} style={styles.image} resizeMode="contain" />
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
    content: {
        padding: 10,
    }
});
