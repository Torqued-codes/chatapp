import { Stack } from "expo-router";
import "../../global.css"
import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import { Slot } from 'expo-router'

export default function RootLayout() {
  <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <Stack screenOptions={{headerShown:false}}>
      <Slot />
      </Stack>
      return <Stack />;
    </ClerkProvider>
  
}

