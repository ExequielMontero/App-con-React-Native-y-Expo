import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cyan' }}>
      <Text style={{position:"absolute", top:20, fontSize:20, backgroundColor:"white", borderRadius: 35}}>Pantalla de Inicio</Text>
      <View>

      </View>
      <View style={styleBotones.container}>
        <TouchableOpacity style={styleBotones.touch} onPress={() => navigation.navigate('Perfil')}>
          <Text>Ir a Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleBotones.touch} onPress={() => navigation.navigate('Noticias')}>
          <Text>Ir a Noticias</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styleBotones = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    gap: 40, // Solo funciona con versión de React Native >= 0.71
  },
  touch: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  }
});

