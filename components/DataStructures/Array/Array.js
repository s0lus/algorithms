
import React, { PureComponent } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import * as Data from "resources/data/ru.json";
import * as Picture from "resources/pictures";

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
                <Image source={Picture.array} style={styles.image} resizeMode="contain"/>
                <Text style={styles.titleBig}>
                    {Data.DataStructures.Array.Types}
                </Text>
                <Text style={styles.titleSmall}>
                    {Data.DataStructures.Array.TypeStatic.Title}
                </Text>
                <Text style={styles.termText}>
                    {Data.DataStructures.Array.TypeStatic.Term}
                </Text>
                <Text style={styles.titleSmall}>
                    {Data.DataStructures.Array.TypeDynamic.Title}
                </Text>
                <Text style={styles.termText}>
                    {Data.DataStructures.Array.TypeDynamic.Term}
                </Text>
                <Text style={styles.titleSmall}>
                    {Data.DataStructures.Array.TypeHeterogeneous.Title}
                </Text>
                <Text style={styles.termText}>
                    {Data.DataStructures.Array.TypeHeterogeneous.Term}
                </Text>
                <Text style={styles.titleBig}>
                    {Data.DataStructures.Array.Memory.Title}
                </Text>
                <Image source={Picture.array_in_memory} style={styles.image} resizeMode="contain"/>
                <Text style={styles.termText}>
                    {Data.DataStructures.Array.Memory.Term}
                </Text>
                <View style={styles.featuresTitleWrapper}>
                    <Text style={styles.titleBig}>
                        {Data.DataStructures.Array.Features.Title}
                    </Text>
                </View>
                <Text style={{ textAlign: "left" }}>
                    {Data.DataStructures.Array.Features.Feature_1}
                    {Data.DataStructures.Array.Features.Feature_2}
                    {Data.DataStructures.Array.Features.Feature_3}
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
    titleBig: {
        fontSize: 18,
        textAlign: "center",
    },
    titleSmall: {
        fontSize: 16,
        textAlign: "center",
    },
    featuresTitleWrapper: {
        marginTop: 10,
        paddingBottom: 10,
    }
});
