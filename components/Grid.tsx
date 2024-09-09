import React from 'react';
import {Dimensions, StyleSheet, Text,View} from 'react-native';
import { Person } from '../types';
interface PersonType
{
    item:Person
}
let size = Dimensions.get('window').width / 2;
size -= 6;
const styles = StyleSheet.create({
    itemContainer:{
        width:size,
        backgroundColor:'lightyellow',
        margin:2,
        padding:3,
    },
    items:
    {
        fontSize:30,
    }
});
const Grid = ({item}:PersonType):React.JSX.Element=>
{
    return(
        <View style={styles.itemContainer} key={item.id}>
            <Text style={styles.items}>Id:{item.id}</Text>
            <Text style={styles.items}>Name:{item.name}</Text>
            <Text style={styles.items}>Age:{item.age}</Text>
        </View>
    );
}
export default Grid;