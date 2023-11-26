import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
export default function Screen1({navigation}) {

    const [nombre, setNombre] = useState("");

   
  return (
    <View style={styles.container}>
      <Text>Bienvenido a la aplicación: {nombre}</Text>
      <Image style={{height:100, width: 250}} source={{uri:"https://www.shutterstock.com/image-vector/spanish-language-vector-template-welcome-260nw-1792430023.jpg"}}></Image>
      <TextInput
            editable
            maxLength={20}
            onChangeText={input => setNombre(input)}
            style={styles.input}
            placeholder="ingresar nombre"
            returnKeyType="next"
            blurOnSubmit={false}
            
          />

          <Button onPress={() => navigation.navigate("Screen2")} title='IR A PAGINA 2'></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 250,
    height: "auto",
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    backgroundColor: "#FFFEDC",
    margin: 20
  },
});
