import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput, Title } from 'react-native-paper'
import { RootStackParamList } from '../stack/StackApp';

type loginScreen = NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;

export const LoginScreen = () => {

    const [usuario, setUsuario] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigator = useNavigation<loginScreen>();

    const handleLogin =  () => {

        console.log(usuario);
        console.log(password);

        if (usuario != 'admin' || password != 'admin') {
            Alert.alert('Error', 'Usuario o contraseña son incorrecto');
            return;
        }
        navigator.navigate('PostsScreen')
        AsyncStorage.setItem('token', 'Bearer');

    }

    return (
        <View style={styleLogin.contenedor}>

            <Text style={styleLogin.titulo}>Iniciar sesión</Text>
            <TextInput
                style={styleLogin.input}
                label="Usuario"
                value={usuario}
                onChangeText={text => setUsuario(text)}
            />
            <TextInput
                secureTextEntry={true}
                style={styleLogin.input}
                label="Contraseña"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button
                mode='contained'
                onPress={handleLogin}
            >
                Inicar session
            </Button>
            
        </View>
    )
}

const styleLogin = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    titulo: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 10,
    },
    input: {
        marginVertical: 8,
    }
})