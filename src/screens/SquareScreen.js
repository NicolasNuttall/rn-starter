import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColourCounter from "../Components/ColourCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log(red);

    return <View>
        <ColourCounter onIncrease={() => setRed(red + 1)} onDecrease={() => setRed(red - 1)} color="Red" />
        <ColourCounter color="Blue"/>
        <ColourCounter color="Green"/>
    </View>
}

const styles = StyleSheet.create({

})

export default SquareScreen
