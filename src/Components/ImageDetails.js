import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetails = (props) => {
    return <View>
        <Image source={props.imgSource}/>
        <Text>{props.title}</Text>
        <Text>{props.sc}</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default ImageDetails
