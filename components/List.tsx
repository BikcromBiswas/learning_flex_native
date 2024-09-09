import React from 'react';
import {View,Text, StyleSheet, TextInputComponent} from 'react-native';
type itemprop=
{
    id:number,
    name:string,
    age:number,
}
type ListProps =
{
    item:itemprop,
}
const List = ({item}:ListProps):React.JSX.Element=>{
    return (
      <View>
        <Text style={styles.textitem}>Name: {item.name}</Text>
      </View>
    );
};
const styles = StyleSheet.create({
    items:{
        backgroundColor:'black',
        width:300,
        fontSize:30,
        margin:20,
        padding:10,
      },
      itemsText:
      {
        fontSize:30,
        color:'lightyellow',
      },
      textitem:
      {
        backgroundColor:'black',
        margin:10,
        display:'flex',
      },
});
export default List;
