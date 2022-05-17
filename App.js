import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: '651469923212-kl708eq8ta9jds9s8c5dpobngvmlefgh.apps.googleusercontent.com',
  });
  useEffect (
    () => {
      if(response?.type==='success'){
        const { authenication } = response;
      }
    }, [response]
  )
  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});