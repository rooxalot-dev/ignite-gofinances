import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { AppRoutes } from './src/app.routes';

export default function App() {
  const [loaded] = useFonts({
    'Regular': Poppins_400Regular,
    'Medium': Poppins_500Medium,
    'Bold': Poppins_700Bold,
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme.default}>
      <StatusBar backgroundColor="transparent" style="inverted" />
      <AppRoutes />
    </ThemeProvider>
  );
}
