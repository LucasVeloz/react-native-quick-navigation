import React from 'react';
import { NavigationContainer } from '../../react-native-quick-navigation/shared';
import { StackRoutes } from './stack.routes';


export const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
