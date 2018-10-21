
import React, { PureComponent } from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-navigation";

import * as Data from "resources/data/ru.json";
import * as Picture from "resources/pictures";

export default class HashTables extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Data.DataStructures.HashTables.Title,
    });

    render() {
        return (
            <SafeAreaView style={styles.root}>
                <ScrollView style={styles.content}>
                    <Text>
                        {Data.DataStructures.HashTables.Term}
                    </Text>
                    <View style={styles.imageCentered}>
                        <Image source={Picture.hash_table} style={styles.image} />
                    </View>
                    <Text style={styles.titleBig}>
                        {Data.DataStructures.HashTables.CollisionResolve.Title}
                    </Text>
                    <Text>
                        {Data.DataStructures.HashTables.CollisionResolve.Intro}
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
    },
    imageCentered: {
        justifyContent: "center",
        alignItems: "center",
    },
    titleBig: {
        fontSize: 18,
        textAlign: "center",
    },
    image: {
        marginVertical: 15,
    }
});
