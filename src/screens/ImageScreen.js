import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from "../Components/ImageDetails";

const ImageScreen = () => {
    return <View>
        <Text>IMAGE</Text>
        <ImageDetails title="imAGE" sc={1} imgSource={require('../../assets/beach.jpg')} />
        <ImageDetails title="imAGE" sc={2} imgSource={require('../../assets/forest.jpg')} />
        <ImageDetails title="imAGE" sc={3} imgSource={require('../../assets/mountain.jpg')} />
    </View>
}

const styles = StyleSheet.create({

})

export default ImageScreen
