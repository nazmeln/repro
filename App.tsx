import React from 'react';
import {
  NavigationContainer,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNShake from 'react-native-shake';

import HomeScreen from './screens/HomeScreen';
import ModalScreen from './screens/ModalScreen';

export type RootStackParamList = {
  Home: undefined;
  Modal: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();

export const push = (
  screen: keyof RootStackParamList,
  params?: RootStackParamList[keyof RootStackParamList],
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(screen, params));
  }
};

function App(): JSX.Element {
  React.useEffect(() => {
    const subscription = RNShake.addListener(() => {
      console.log('shake code');
      push('Modal');
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
