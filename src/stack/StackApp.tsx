
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens/LoginScreen';
import { PostsScreen } from '../screens/PostsScreen';
import { DestacadosScreen } from '../screens/DestacadosScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  PostsScreen: undefined;
  DestacadosScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackApp = () => {
  return (
    <Stack.Navigator
      initialRouteName='LoginScreen'
    >
      <Stack.Screen 
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false}}
        
      />
      <Stack.Screen name='PostsScreen' component={PostsScreen}/>
      <Stack.Screen name='DestacadosScreen' component={DestacadosScreen}/>
    </Stack.Navigator>
  )
}
