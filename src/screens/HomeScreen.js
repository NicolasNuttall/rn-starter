import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";


const HomeScreen = ({navigation}) => {

  return <View>
    <Text style={styles.text}>HomeScreeeen</Text>
    <Button
        onPress={() => navigation.navigate('Comp')}
        title="Go to components DEMOO"
    />
    <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Text>GO TO LIST DEMO</Text>
      <Text>MORE TEXT</Text>
      <Text>Even more...</Text>
    </TouchableOpacity>

    <Button
        title="IMAGE SCREEN"
        onPress={() => navigation.navigate("Images")}
    />
    <Button
        title="Counter Screen"
        onPress={() => navigation.navigate("Counter")}
    />
    <Button
        title="Colour Screen"
        onPress={() => navigation.navigate("Colour")}
    />
    <Button
        title="Square Screen"
        onPress={() => navigation.navigate("SquareScreen")}
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
