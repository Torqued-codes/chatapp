import { View, Text } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useAuth } from '@clerk/expo';
import { Redirect } from 'expo-router';

import * as Sentry from '@sentry/react-native';

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




