import { Stack } from "expo-router";
import "../../global.css"
import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import { Slot } from 'expo-router'
import { GestureHandlerRootView } from "react-native-gesture-handler";


Sentry.init({
  dsn: 'https://84bd8c93606c7de9403c20e2ec36b61b@o4511103665831936.ingest.us.sentry.io/4511103683067904',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});


export default function RootLayout() {
  return (
  <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <GestureHandRootView className="flex-1">
      <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Slot />
      </Stack>
      </GestureHandRootView>
      return <Stack />;
    </ClerkProvider>
  
);
}

