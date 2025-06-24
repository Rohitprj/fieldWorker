import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="SelfieScreen" options={{ headerShown: false }} />
        <Stack.Screen name="FormScreen" options={{ headerShown: false }} />
        <Stack.Screen name="UploadScreen" options={{ headerShown: false }} />
        <Stack.Screen name="VerificationScreen" options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
        <Stack.Screen name="NotificationScreen" options={{ headerShown: false }} />
        <Stack.Screen name="FaceSelfieScreen" options={{ headerShown: false }} />
        <Stack.Screen name="HelpScreen" options={{ headerShown: false }} />
        <Stack.Screen name="Settings" options={{ headerShown: false }} />


        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
