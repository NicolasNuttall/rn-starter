import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const fruits = [
        {name: 'FRUIT 1', age:10},
        {name: 'FRUIT 2', age:15},
        {name: 'FRUIT 3', age:16},
        {name: 'FRUIT 4', age:11},
        {name: 'FRUIT 5', age:12},
    ]

    return (
        <FlatList
            vertical
            keyExtractor={fruit => fruit.name}
            data={fruits}
            renderItem={({item}) => {
                return <View>
                    <Text style={styles.listItem}>{item.name}</Text>
                    <Text>{item.age}</Text>
                </View>
            }}
        />
    )
}
const styles = StyleSheet.create({
    listItem: {
        paddingTop:200
    }
})

export default ListScreen;
