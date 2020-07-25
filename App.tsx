import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@shopify/restyle';

import { Onboarding, Welcome } from './src/Authentication';
import { LoadAssets, theme } from './src/components';

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/FontsFree-Net-SFProDisplay-Bold.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/FontsFree-Net-SFProDisplay-Medium.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/FontsFree-Net-SFProDisplay-Semibold.ttf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return(
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
      <AuthenticationStack.Screen name='Welcome' component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}