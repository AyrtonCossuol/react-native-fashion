import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomerNavigator } from './src/Home';
import { assets as authenticationAssets, AuthenticationNavigator } from './src/Authentication';
import { LoadAssets } from './src/components';
import { theme } from './src/components/Theme';
import { createStackNavigator } from '@react-navigation/stack';

const assets = [...authenticationAssets];
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/FontsFree-Net-SFProDisplay-Bold.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/FontsFree-Net-SFProDisplay-Medium.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/FontsFree-Net-SFProDisplay-Semibold.ttf"),
};


type AppStackRoutes = {
  Authentication: undefined;
  Home: undefined;
}

const AppStack = createStackNavigator<AppStackRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode='none'>
            <AppStack.Screen name='Authentication' component={AuthenticationNavigator} />
            <AppStack.Screen name='Home' component={HomerNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}