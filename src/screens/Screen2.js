import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function Screen2({ navigation }) {


    const MostrarAlert = () => {
        Alert.alert("ALERT", "ESTO ES UN ALERT");
    }

    return (
        <View style={styles.container}>
            <Text>Pantalla 2</Text>

            <View style={styles.container2}>
            <Button onPress={() => MostrarAlert()} title='Mostrar Alert' style={styles.boton}></Button>


            <Button onPress={() => navigation.navigate("Screen1")} title='IR A PAGINA 1' style={styles.button}></Button>
            </View>
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
    container2:{
        margin: 20
    }
});
