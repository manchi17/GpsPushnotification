import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './home';
import {Speed} from './speed';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Speed" component={Speed} />
    </Stack.Navigator>
  );
}

export default Router;
