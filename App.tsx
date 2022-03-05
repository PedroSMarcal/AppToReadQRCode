import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack'

import LandingPage from './src/pages/LandingPage';
import SpecificTicket from './src/pages/SpecificTicket';
import QRCode from './src/pages/QRCode';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'white' },
        }}>
          <Stack.Screen name="Home" component={LandingPage} />
          <Stack.Screen name="Ticket" component={SpecificTicket} />
          <Stack.Screen name="QRCode" component={QRCode} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
