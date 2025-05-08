import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [miemail, setEmail] = useState('');
  const [mipassword, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Realizando la solicitud POST a Reqres
      console.log(miemail + " " + mipassword)
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indicamos que el cuerpo es JSON
          'X-API-KEY': 'reqres-free-v1'
        },
        body: JSON.stringify({
          email: miemail,   // Usuario de prueba
          password: mipassword,         // Contraseña de prueba
        }),
      });
  
      const data = await response.json();  // Parseamos la respuesta como JSON
  
      if (data.token) {
        // Si la respuesta contiene un token, significa que el login fue exitoso
        Alert.alert('Login exitoso');
        navigation.navigate("Inicio");
      } else {
        // Si no se obtiene un token, puede haber un error
        Alert.alert('Error en el login');
      }
    } catch (error) {
      Alert.alert('Error en la solicitud de login:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Image source={require('../assets/login-image.png')} style={{marginLeft:"auto", marginRight:"auto", marginBottom:30}}/>
      <Text style={{position: "absolute", top:80, left:160}}>Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Correo"
        value={miemail}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        value={mipassword}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  label: { fontSize: 16, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
  },
});
/* "email": "eve.holt@reqres.in",
  "password": "cityslicka" missing api key*/
