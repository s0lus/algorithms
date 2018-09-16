
import React, { PureComponent } from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";

import * as Data from "resources/data/ru.json";
import array from "resources/pictures/array.png";

export default class Array extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Data.DataStructures.Array.Title,
    });

    render() {
        return (
            <ScrollView style={styles.root} contentContainerStyle={styles.content}>
                <Text style={styles.text}>
                    {Data.DataStructures.Array.Term}
                </Text>
                <Image source={array} style={styles.image} resizeMode="contain"/>
                <Text style={styles.typesTitle}>
                    {Data.DataStructures.Array.Types}
                </Text>
                <Text style={styles.typeStatic}>
                    {Data.DataStructures.Array.TypeStatic.Title}
                </Text>
                <Text style={styles.termText}>
                    {Data.DataStructures.Array.TypeStatic.Term}
                </Text>
                <Text style={styles.typeDynamic}>
                    {Data.DataStructures.Array.TypeDynamic.Title}
                </Text>
                <Text style={styles.termText}>
                    {Data.DataStructures.Array.TypeDynamic.Term}
                </Text>
                <Text style={styles.typeHeterogeneous}>
                    {Data.DataStructures.Array.TypeHeterogeneous.Title}
                </Text>
                <Text style={styles.termText}>
                    {Data.DataStructures.Array.TypeHeterogeneous.Term}
                </Text>
            </ScrollView>
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
    image: {
        width: "100%",
        marginVertical: 15,
    },
    termText: {
        textAlign: "left",
    },
    typesTitle: {
        fontSize: 18,
        textAlign: "center",
    },
    typeStatic: {
        fontSize: 16,
        textAlign: "center",
    },
    typeDynamic: {
        fontSize: 16,
        textAlign: "center",
    },
    typeHeterogeneous: {
        fontSize: 16,
        textAlign: "center",
    }
});
