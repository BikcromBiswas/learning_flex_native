import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import Userdata from './components/Userdata';

function Userdata(): React.JSX.Element {
  const [money,setMoney] = useState("");
  const handleChange = (e:string):void=>{
  if(!(e.length >= 1 && e[0] === '0' || e.charAt(e.length-1) === '.' || e.charAt(e.length-1) === ','))
    {
      setMoney(e);
    }
     else {}
      };
  //value={money.toString()} onChangeText={handleChange}
  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>Enter the Money</Text>
      <TextInput style={styles.textInput} placeholder="0" keyboardType="numeric" onChangeText={handleChange} value={money} onma/> 
      <Text >{money}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center', // Center the button horizontally
  },
  textBox:
  {
    fontSize:30,
  },
  textInput:{
    backgroundColor:'white',
    borderRadius:10,
    width:100,
    textAlign:'center',
    paddingHorizontal:10,
    fontSize:20,
  },
});

export default App;