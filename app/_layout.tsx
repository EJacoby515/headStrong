import React from 'react';
import { Stack } from 'expo-router';
import { useAuth } from './src/hooks/useAuth';

export default function RootLayout() {
  const { user } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}