
import React, {PureComponent} from "react";
import { Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";

import { i18n } from "utils";
import * as Picture from "resources/pictures";

export default class LinkedList extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: i18n("DataStructures.LinkedList.Title"),
    });

    render() {
        return (
            <SafeAreaView style={styles.root}>
                <ScrollView style={styles.content}>
                    <Text>
                        {i18n("DataStructures.LinkedList.Term")}
                    </Text>
                    <Image source={Picture.linked_list} style={styles.image} resizeMode="contain" />
                    <Text>
                        {i18n("DataStructures.LinkedList.Picture")}
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
    }
});
