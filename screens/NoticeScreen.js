import React, { Component, StyleSheet } from 'react';
import { View, Text, Button } from 'react-native';

export default function NoticeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: "cyan" }}>
      <Text style={{position:"absolute", top:20, fontSize:20, backgroundColor:"white", borderRadius: 35}}>Pantalla de noticias</Text>
    </View>
  );
}