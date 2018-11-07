
import React, { PureComponent } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";

import { i18n } from "utils";

import * as Picture from "resources/pictures";

export default class Array extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: i18n("DataStructures.Array.Title"),
    });

    render() {
        return (
            <SafeAreaView style={styles.root}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={styles.text}>
                        {i18n("DataStructures.Array.Term")}
                    </Text>
                    <Image source={Picture.array} style={styles.image} resizeMode="contain"/>
                    <Text style={styles.titleBig}>
                        {i18n("DataStructures.Array.Types")}
                    </Text>
                    <Text style={styles.titleSmall}>
                        {i18n("DataStructures.Array.TypeStatic.Title")}
                    </Text>
                    <Text style={styles.termText}>
                        {i18n("DataStructures.Array.TypeStatic.Term")}
                    </Text>
                    <Text style={styles.titleSmall}>
                        {i18n("DataStructures.Array.TypeDynamic.Title")}
                    </Text>
                    <Text style={styles.termText}>
                        {i18n("DataStructures.Array.TypeDynamic.Term")}
                    </Text>
                    <Text style={styles.titleSmall}>
                        {i18n("DataStructures.Array.TypeHeterogeneous.Title")}
                    </Text>
                    <Text style={styles.termText}>
                        {i18n("DataStructures.Array.TypeHeterogeneous.Term")}
                    </Text>
                    <Text style={styles.titleBig}>
                        {i18n("DataStructures.Array.Memory.Title")}
                    </Text>
                    <Image source={Picture.array_in_memory} style={styles.image} resizeMode="contain"/>
                    <Text style={styles.termText}>
                        {i18n("DataStructures.Array.Memory.Term")}
                    </Text>
                    <View style={styles.featuresTitleWrapper}>
                        <Text style={styles.titleBig}>
                            {i18n("DataStructures.Array.Features.Title")}
                        </Text>
                    </View>
                    <Text style={{textAlign: "left"}}>
                        {i18n("DataStructures.Array.Features.Feature_1")}
                        {i18n("DataStructures.Array.Features.Feature_2")}
                        {i18n("DataStructures.Array.Features.Feature_3")}
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
