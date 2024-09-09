import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, TextInput, FlatList, FlatListComponent, ScrollView, SafeAreaView } from 'react-native';
import Grid from './components/Grid'
/*interface Person{
  id:number;
  name:string;
  age:number;
}*/
type Person = {
  id: number,
  name: string,
  age: number,
}
function App(): React.JSX.Element {
  const [direction, setDirection] = useState('column');
  const [justifyContentDirection,setJustifyContentDirection] = useState('flex-start');
  const [alignItemele,setAlignItem] = useState('flex-start');
  let obj = { ...styles.container,  borderWidth: 3, borderColor: 'orange',flexDirection:`${direction}`,justifyContent:`${justifyContentDirection}`,alignContent: `${alignItemele}`,flexWrap:'wrap'};
  //ALIGN ITEM ONLY WORK WHEN WE DONT USE FLEX-WRAP
  //WHEN WE HAVE TO USE FLEX-WRAP THEN WE HAVE TO USE ALIGN-CONTENT
  //let obj = { ...styles.container,  borderWidth: 3, borderColor: 'orange',flexDirection:`${direction}`,justifyContent:`${justifyContentDirection}`,alignContent: `${alignItemele}`,flexWrap:'wrap'};
  return (
    <>
        <View style={{backgroundColor:'plum',}}>
          <Text style={styles.textStyle}>Flex Direction = {direction}</Text>
        </View>
      <View style={[styles.container, { flex: 0, flexDirection: 'row',justifyContent:'space-between' ,}]}>
        <Button title="COLUMN" onPress={() => (setDirection('column'))} />
        <Button title="ROW" onPress={() => (setDirection('row'))} />
        <Button title="ROW-REVERSE" onPress={() => (setDirection('row-reverse'))} />
        <Button title="COLUMN-REVERSE" onPress={() => (setDirection('column-reverse'))} />
      </View>
      <View style={{backgroundColor:'plum',}}>
          <Text style={styles.textStyle}>Justify Content = {justifyContentDirection}</Text>
      </View>
      <View style={[styles.container, { flex: 0, flexDirection: 'row',flexWrap:'wrap',justifyContent:'center',}]}>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setJustifyContentDirection('center'))}>
          <Text style={{color:'white',padding:8}}>CENTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setJustifyContentDirection('flex-start'))} >
          <Text style={{color:'white',padding:8}}>FLEX-START</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setJustifyContentDirection('flex-end'))} >
          <Text style={{color:'white',padding:8}}>FLEX-END</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setJustifyContentDirection('space-around'))} >
          <Text style={{color:'white',padding:8}}>SPACE-AROUND</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setJustifyContentDirection('space-evenly'))} >
          <Text style={{color:'white',padding:8}}>SPACE-EVENLY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setJustifyContentDirection('space-between'))} >
          <Text style={{color:'white',padding:8}}>SPACE-BETWEEN</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor:'plum',}}>
          <Text style={styles.textStyle}>Align Item = {alignItemele}</Text>
      </View>
      <View style={[styles.container, { flex: 0, flexDirection: 'row',flexWrap:'wrap',justifyContent:'center'}]}>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setAlignItem('center'))}>
          <Text style={{color:'white',padding:8}}>CENTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setAlignItem('baseline'))} >
          <Text style={{color:'white',padding:8}}>BASELINE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setAlignItem('flex-end'))} >
          <Text style={{color:'white',padding:8}}>FLEX-END</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setAlignItem('flex-start'))} >
          <Text style={{color:'white',padding:8}}>FLEX-START</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}onPress={() => (setAlignItem('stretch'))} >
          <Text style={{color:'white',padding:8}}>STRETCH</Text>
        </TouchableOpacity>
      </View>
      <View style={[obj]}>
        <View style={[styles.yellowContainer,{alignSelf:''}]}><Text>Yellow</Text></View>
        <View style={styles.redContainer}><Text>Red</Text></View>
        <View style={styles.blueContainer}><Text>Blue</Text></View>
        <View style={[styles.yellowContainer,{alignSelf:''}]}><Text>Yellow</Text></View>
        <View style={styles.redContainer}><Text>Red</Text></View>
        <View style={styles.blueContainer}><Text>Blue</Text></View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  yellowContainer: {
    backgroundColor: 'yellow',
    width: 150,
    height: 150,
  },
  redContainer:
  {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
  blueContainer:
  {
    backgroundColor: 'steelblue',
    width: 150,
    height: 150,
  },
  buttonStyle:
  {
    height:48,
    backgroundColor:'#2196F3',
    justifyContent:'center',
    margin:2,
  },
});

export default App;
