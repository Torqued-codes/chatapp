import { Text, View, StyleSheet, Pressable } from "react-native";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

export default function Index() {
  const {isSignedIn, isLoaded, signOut}=useAuth();
  if(!isLoaded) return null;

  if(!isSignedIn){ 
    return <Redirect href={"/(auth)" as never } />;
  }
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>

      <Pressable onPress={() => signOut}>

        <Text>Sign Out</Text>

      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

// home page