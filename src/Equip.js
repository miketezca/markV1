import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function screenEquip({ navigation }){

    const onPressHandler = () => {
      navigation.navigate('subirReporte');
      //navigation.goBack();
    }

    // Aquí insertamos la función timestamp
    return(
      <View style = {styles.body }>
        <Text style = { styles.text } >
          Seleccione la falla
        </Text>
        <Pressable
          onPress = { onPressHandler }
          style = {styles.button}
        >
        <Text style = { styles.text } >
          Falla 1
        </Text>
        </Pressable>
        <Pressable
          onPress = { onPressHandler }
          style = {styles.button}
        >
        <Text style = { styles.text } >
          Falla 2
        </Text>
        </Pressable>
        <Pressable
          onPress = { onPressHandler }
          style = {styles.button}
        >
        <Text style = { styles.text } >
          Falla 3
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
    button: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7FB3D5',
        borderRadius: 5,
        alignSelf: 'center',
        padding: 10, 
        width: '90%',
        marginBottom: 10,
        marginTop: 10,
    }, 
  });