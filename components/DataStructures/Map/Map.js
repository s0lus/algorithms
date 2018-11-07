
import React, { PureComponent } from "react";
import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { SafeAreaView } from "react-navigation";

import { i18n } from "utils";

import * as Picture from "resources/pictures";

export default class Map extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: i18n("DataStructures.Map.Title"),
    });

    render() {
        return (
            <SafeAreaView style={styles.root}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text>
                        {i18n("DataStructures.Map.Term")}
                    </Text>
                    <View style={styles.imageCentered}>
                        <Image source={Picture.map} style={styles.image}/>
                    </View>
                    <Text style={styles.titleBig}>
                        {i18n("DataStructures.Map.Operations.Title")}
                    </Text>
                    <Text style={styles.operations}>
                        {i18n("DataStructures.Map.Operations.Add")}
                        {i18n("DataStructures.Map.Operations.Remove")}
                        {i18n("DataStructures.Map.Operations.Change")}
                        {i18n("DataStructures.Map.Operations.Find")}
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
        marginVertical: 15,
    },
    imageCentered: {
        justifyContent: "center",
        alignItems: "center",
    },
    titleBig: {
        fontSize: 18,
        textAlign: "center",
    },
    operations: {
        textAlign: "left",
    }
});
