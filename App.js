import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';

import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Dashboard from './src/screens/dashboard';

enableScreens();
const Stack = createNativeStackNavigator();

const navigationOptions = {
  headerShown: false,
  header: null,
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={navigationOptions}
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={navigationOptions}
        />
        <Stack.Screen
          name="Dashboard"
          options={{headerHideBackButton: true, gestureEnabled: false}}
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
