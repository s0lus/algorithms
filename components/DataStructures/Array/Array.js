
import React, { PureComponent } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import * as Data from "resources/data/ru.json";
import array from "resources/pictures/array.png";

export default class Array extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Data.DataStructures.Array.Title,
    });

    render() {
        return (
            <View>
                <Text style={styles.text}>
                    {Data.DataStructures.Array.Term}
                </Text>
                <Image source={array} />
                <Text style={styles.text}>
                    {Data.DataStructures.Array.Types}
                    {Data.DataStructures.Array.TypeStatic}
                    {Data.DataStructures.Array.TypeDynamic.Title}
                    {Data.DataStructures.Array.TypeDynamic.Term}
                    {Data.DataStructures.Array.TypeHeterogeneous.Title}
                    {Data.DataStructures.Array.TypeHeterogeneous.Term}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
    }
});
