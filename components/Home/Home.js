
import React, { PureComponent } from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class Home extends PureComponent {
    static navigationOptions = () => ({
        header: null,
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.text}>Алгоритмы</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.text}>Сткрутуры данных</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    top: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000000',
        height: 100,
        width: '85%',
    },
    bottom: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000000',
        height: 100,
        width: '85%',
    },
    text: {
        textAlign: 'center',
    }
});
