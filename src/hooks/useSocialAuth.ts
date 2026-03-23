import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";

// loading spinner 
const useSocialAuth = () => {
    const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
    const { startSSOFlow } = useSSO(); // SSO is single sign out

    const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple" | "oauth_github"  ) => {    // this shows that user is login in via google/apple/github
        if(loadingStrategy) return // if user has clicked on google and page is loading, that time if he clicks on apple or git logo, nothing should happen
    
        setLoadingStrategy(strategy)

        try {
            const { createdSessionId, setActive } = await startSSOFlow({strategy});
            
            if (!createdSessionId || !setActive) {
                const provider =
                    strategy === "oauth_google"? "Google" : strategy === "oauth_apple"? "Apple" :  "Github" ;
            
                Alert.alert("Sign-in incomplete",`${provider} Sign in did not complete. Please try again`);

                return;
            }
            await setActive({ session: createdSessionId });
        } catch (error) {
            console.log("Erro is the authorization:", error);
            const provider =
                strategy === "oauth_google"? "Google" : strategy === "oauth_apple"? "Apple" :  "Github" ;
            Alert.alert(`Couldn't SignIn with"${provider} Sign in did not complete. Please try again`);
        } finally {
            setLoadingStrategy(null);
        }
    };
    return { handleSocialAuth, loadingStrategy };
};

export default useSocialAuth;