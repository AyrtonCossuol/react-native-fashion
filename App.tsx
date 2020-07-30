import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { assets as authenticationAssets, AuthenticationNavigator } from './src/Authentication';
import { LoadAssets, theme } from './src/components';

const assets = [...authenticationAssets];
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/FontsFree-Net-SFProDisplay-Bold.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/FontsFree-Net-SFProDisplay-Medium.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/FontsFree-Net-SFProDisplay-Semibold.ttf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}