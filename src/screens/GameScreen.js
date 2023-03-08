import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const GameScreen = ({userOption}) => {

const currentGuess = ({}) => {}

if (userOption < 6)
  return (<View style={styles.screen}>
  <Text>Primera opción</Text>
  <Card style={styles.buttonContainer}>
  <Image source={require("../../assets/pixel2.png")} resizeMode='cover' style={styles.image}/>
  </Card>
</View>)
 if(userOption > 5)
return (
  <View style={styles.screen}>
    <Text>Segunda opción</Text>
    <Card style={styles.buttonContainer}>
      <Image source={require("../../assets/pixel1.png")} style={styles.image}/>
    </Card>
  </View>
)}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    },
    image:{
      width:200,
      height:200,

    }
})