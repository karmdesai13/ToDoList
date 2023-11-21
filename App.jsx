import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import About from './src/screens/About';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}


export default App;