import React from 'react';
import { View, Text } from 'react-native';
import UserInfo from './sub-screens/userinfo';
import UserSettings from './sub-screens/usersettings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function ProfileScreen() {
  return (
     <Tab.Navigator>
      <Tab.Screen name="Info" component={UserInfo} />
      <Tab.Screen name="Configuración" component={UserSettings} />
    </Tab.Navigator>
  );
}
