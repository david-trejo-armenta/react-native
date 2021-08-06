import React from "react";
import { View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native'
import Colors from "../res/Colors";

const Loader = () => {
    return (
        <View>
            <StatusBar style={[styles.container, styles.horizontal]} />
            <StatusBar backgroundColor="transparent" translucent={true} />
            <ActivityIndicator
                style={styles.loader}
                color={Colors.green}
                size="large"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.charade,
    },
    horizontal: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    loader: {
        height: '100%',
        alignItems: 'center',
    },
});

export default Loader;