import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ScreenB({ navigation }){

    const onPressHandler = () => {
      //navigation.navigate('Screen_A');
      navigation.goBack();
    }
  
    return(
      <View style = {styles.body }>
        <Text style = { styles.text } >
          Texto pantalla B
        </Text>
        <Pressable
          onPress = { onPressHandler }
          style = {({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0'})}
        >
        <Text style = { styles.text } >
          Volver
        </Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'normal',
      margin: 10,
    }, 
  });