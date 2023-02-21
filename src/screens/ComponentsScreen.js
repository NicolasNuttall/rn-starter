 import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>HHHHHHHH</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>Testst</Text>
            {greeting}
            <Text style={styles.textStyle2}>MORE TEXT</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30,
        color:"white",
        backgroundColor:"black",
        padding:20,
        textTransform:"lowercase"
    },
    textStyle2: {
        padding:50,
        color:"green",
        fontSize:10
    }
})

 export default ComponentsScreen;
