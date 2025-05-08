import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "cyan" }}>
      <Text style={{position:"absolute", top:20, fontSize:20, backgroundColor:"white", borderRadius: 35}}>Pantalla de Perfil</Text>
    </View>
  );
}
