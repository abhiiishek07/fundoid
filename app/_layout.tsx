import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(auth)/index',
};

import {
  Khand_300Light,
  Khand_400Regular,
  Khand_500Medium,
  Khand_600SemiBold,
  Khand_700Bold,
  useFonts as useKhand,
} from '@expo-google-fonts/khand';

import {
  Hind_300Light,
  Hind_400Regular,
  Hind_500Medium,
  Hind_600SemiBold,
  Hind_700Bold,
  useFonts as useHind,
} from '@expo-google-fonts/hind';

import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [khandLoaded] = useKhand({
    Khand_300Light,
    Khand_400Regular,
    Khand_500Medium,
    Khand_600SemiBold,
    Khand_700Bold,
  });

  const [hindLoaded] = useHind({
    Hind_300Light,
    Hind_400Regular,
    Hind_500Medium,
    Hind_600SemiBold,
    Hind_700Bold,
  });

  const fontsLoaded = khandLoaded && hindLoaded;

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Stack>
        {/* AUTH */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        {/* TABS */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
