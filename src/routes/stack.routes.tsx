import React from 'react';
import { createStackNavigation } from '../../react-native-quick-navigation/stack';
import { FirstScreen } from '../screens/FirstScreen';
import { SecondScreen } from '../screens/SecondScreen';


const { Navigator, Screen } = createStackNavigation()


export const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="FirstScreen" component={FirstScreen} />
      <Screen name="SecondScreen" component={SecondScreen} />
    </Navigator>
  )
}
