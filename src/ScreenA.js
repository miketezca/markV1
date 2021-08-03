import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ScreenA({ navigation }){

    const onPressHandler1 = () => {
      navigation.navigate('Produccion'); // header
    }

    const onPressHandler2 = () => {
        navigation.navigate('Tecnico'); // header
      }

    const onPressHandler3 = () => {
      navigation.navigate('B'); // header
    }

    return(
      <View style = {styles.body }>
        <Text style = { styles.text } >
          Perfiles
        </Text>
        <Pressable
          onPress = { onPressHandler1 }
          style = {styles.button}
        >
        <Text style = { styles.text } >
          Producción
        </Text>
        </Pressable>

        <Pressable
          onPress = { onPressHandler2 }
          style = {styles.button}
        >
        <Text style = { styles.text } >
          Técnico
        </Text>
        </Pressable>

        <Pressable
          onPress = { onPressHandler3 }
          style = {styles.button}
        >
        <Text style = { styles.text } >
          Administrador
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
      marginTop: 30,
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