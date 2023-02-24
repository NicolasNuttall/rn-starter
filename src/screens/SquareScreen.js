import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColourCounter from "../Components/ColourCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

  const COLOR_INCREMENT = 20;

    const setColour = (color, change) => {
         if(color == "red") {
             if (red + change > 255 || red + change < 0) {
                 return;
             } else {
                 setRed(red + change);
             }
         }
    }

    return <View>
        <ColourCounter
            onIncrease={() => setColour("red", COLOR_INCREMENT)}
            onDecrease={() => setColour("red", -1 * COLOR_INCREMENT)}
            color="Red"
        />
        <ColourCounter color="Blue"
           onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
           onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        />
        <ColourCounter color="Green"
           onIncrease={() => setGreen(green + COLOR_INCREMENT)}
           onDecrease={() => setRed(green - COLOR_INCREMENT)}
        />
        <View style={{height:200, width:200, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
}

const styles = StyleSheet.create({

})

export default SquareScreen
