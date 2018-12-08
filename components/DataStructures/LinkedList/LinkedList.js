
import React, {PureComponent} from "react";
import { Text, StyleSheet, Image, ScrollView, View } from "react-native";
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
                <ScrollView>
                    <Text>
                        {i18n("DataStructures.LinkedList.Term")}
                    </Text>
                    <Image source={Picture.linked_list} style={styles.image} resizeMode="contain" />
                    <Text>
                        {i18n("DataStructures.LinkedList.Picture")}
                    </Text>
                    <View style={styles.typesOfLinkedList}>
                        <Text style={styles.titleBig}>
                            {i18n("DataStructures.LinkedList.TypesOfLinkedLists.Title")}
                            <Text style={[styles.titleBig, styles.subTitle]}>
                                {i18n("DataStructures.LinkedList.TypesOfLinkedLists.UnidirectionalLinkedList.Title")}
                            </Text>
                            <Text style={styles.titleLeft}>
                                {i18n("DataStructures.LinkedList.TypesOfLinkedLists.UnidirectionalLinkedList.Info")}
                            </Text>
                            <Text style={[styles.titleBig, styles.subTitle]}>
                                {i18n("DataStructures.LinkedList.TypesOfLinkedLists.BidirectionalLinkedList.Title")}
                            </Text>
                            <Text style={styles.titleLeft}>
                                {i18n("DataStructures.LinkedList.TypesOfLinkedLists.BidirectionalLinkedList.Info")}
                            </Text>
                            <Text style={[styles.titleBig, styles.subTitle]}>
                                {i18n("DataStructures.LinkedList.TypesOfLinkedLists.RingLinkedList.Title")}
                            </Text>
                            <Text style={styles.titleLeft}>
                                {i18n("DataStructures.LinkedList.TypesOfLinkedLists.RingLinkedList.Info")}
                            </Text>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: "100%",
        marginVertical: 15,
    },
    titleBig: {
        fontSize: 18,
        textAlign: "center",
    },
    titleLeft: {
        textAlign: "left",
        fontSize: 14,
    },
    subTitle: {
        fontSize: 16,
    },
    typesOfLinkedList: {
        marginTop: 10,
    }
});
