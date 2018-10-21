
import React, { PureComponent } from "react";
import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { SafeAreaView } from "react-navigation";

import * as Data from "resources/data/ru.json";
import * as Picture from "resources/pictures";

export default class Map extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Data.DataStructures.Map.Title,
    });

    render() {
        return (
            <SafeAreaView style={styles.root}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text>
                        {Data.DataStructures.Map.Term}
                    </Text>
                    <View style={styles.imageCentered}>
                        <Image source={Picture.map} style={styles.image}/>
                    </View>
                    <Text style={styles.titleBig}>
                        {Data.DataStructures.Map.Operations.Title}
                    </Text>
                    <Text style={styles.operations}>
                        {Data.DataStructures.Map.Operations.Add}
                        {Data.DataStructures.Map.Operations.Remove}
                        {Data.DataStructures.Map.Operations.Change}
                        {Data.DataStructures.Map.Operations.Find}
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
