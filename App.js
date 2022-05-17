import React, { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      '681054272055-u7abarkjac7juminc7i8mv1dsbndpjst.apps.googleusercontent.com',
    expoClientId:
      '681054272055-903km3fno8pg1fnas84fo7a51ceoen3r.apps.googleusercontent.com',
    androidClientId:
      '681054272055-903km3fno8pg1fnas84fo7a51ceoen3r.apps.googleusercontent.com',
    iosClientId:
      '681054272055-903km3fno8pg1fnas84fo7a51ceoen3r.apps.googleusercontent.com',
  });

  const [loggedIn, setLoggedIn] = useState('');

  useEffect (
    () => {
      if(response?.type==='success'){
        const { authenication, type } = response;
        setLoggedIn(type);
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
      <Text>
        {
        loggedIn === "success" ?
          "Logged In" : "Logged Out"
        }
      </Text>
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
