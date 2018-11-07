
import React, { PureComponent } from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-navigation";

import { i18n } from "utils";

import * as Picture from "resources/pictures";

export default class HashTables extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: i18n("DataStructures.HashTables.Title"),
    });

    render() {
        return (
            <SafeAreaView style={styles.root}>
                <ScrollView style={styles.content}>
                    <Text>
                        {i18n("DataStructures.HashTables.Term")}
                    </Text>
                    <View style={styles.imageCentered}>
                        <Image source={Picture.hash_table} style={styles.image} />
                    </View>
                    <Text style={styles.titleBig}>
                        {i18n("DataStructures.HashTables.CollisionResolve.Title")}
                    </Text>
                    <Text>
                        {i18n("DataStructures.HashTables.CollisionResolve.Intro")}
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
