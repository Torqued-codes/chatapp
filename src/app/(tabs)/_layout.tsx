import { View, Text } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useAuth } from '@clerk/expo';
import { Redirect } from 'expo-router';

import * as Sentry from '@sentry/react-native';

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

const TabsLayout = () => {
    const { isSignedIn, isLoaded } = useAuth()
    
      if (!isLoaded) {
        return null
      }
    
      if (!isSignedIn) {
        return <Redirect href={'/(auth)' as never } />
      }
      
    return (
        <NativeTabs>
            <NativeTabs.Trigger name='index'>
                <NativeTabs.Trigger.Label>Chat</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf="message" md="chat" selectedColor={"purple"} />              {/* sf is for ios, md for android*/}
            </NativeTabs.Trigger>
                
            <NativeTabs.Trigger name='index'>
            <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon sf="safari" md="explore" selectedColor={"purple"} />   
            </NativeTabs.Trigger>


            <NativeTabs.Trigger name='profile'>
            <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon sf="person.fill" md="person" selectedColor={"purple"} />   
            </NativeTabs.Trigger>
            </NativeTabs>
    )
}
export default TabsLayout




