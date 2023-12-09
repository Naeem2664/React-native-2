import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
function fruits(val)
{
  console.warn(val)
}
export default function App(){
  return (
    <View style={styles.container}>
      <Button title='Press Me'onPress={()=>fruits("Hello Naeem")} color={'black'}></Button>
      <Text></Text>
      <Button title='Press Me'onPress={()=>fruits("This is react native crash course")} color={'red'}></Button>
    </View>
  );
  }

  const styles=StyleSheet.create({
    container:{
      margin:30,
      flex:1,
      backgroundColor:'yellow',
    },
    text:{
      margin:20,
      color:'white',
    },
  })




