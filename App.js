import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homescreen';
import ProfileScreen from './screens/profilescreen';
import NoticeScreen from './screens/noticescreen';
import LoginScreen from './screens/loginscreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="Noticias" component={NoticeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

