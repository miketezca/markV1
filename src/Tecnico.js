import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ScreenTecnico({ navigation }){

    const onPressHandler = () => {
      navigation.goBack();
    }
  
    return(
      <View style = {styles.body }>
        <Text style = { styles.text } >
          Texto Técnico
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