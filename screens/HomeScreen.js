import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cyan' }}>
      <Text style={{position:"absolute", top:20, fontSize:20, backgroundColor:"white", borderRadius: 35}}>Pantalla de Inicio</Text>
      <View>

      </View>
      <View style={styleBotones.container}>
        <TouchableOpacity style={styleBotones.touch} onPress={() => navigation.navigate('Noticias')}>
          <Text style={styleBotones.text}>Ir a Noticias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleBotones.touch} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styleBotones.text}>Ir a Perfil</Text>
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
    gap: 20,
  },
  touch: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    marginHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  }
});


