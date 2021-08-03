import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function screenRepoCom({ navigation }){

    const onPressHandler = () => {
      navigation.navigate('Screen_A');
      //navigation.goBack();
    }
  
    return(
      <View style = {styles.body }>
        <Text style = { styles.text } >
          Reporte generado
        </Text>
        <Pressable
          onPress = { onPressHandler }
          style = {styles.button}
        >
        <Text style = { styles.text } >
          Volver a la pantalla principal
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