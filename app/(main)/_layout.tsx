import React from 'react';
import { Stack } from 'expo-router';

export default function MainLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen 
        name="settings" 
        options={{ 
          presentation: 'modal',
          headerTitle: 'Settings',
          headerShown: true,
        }} 
      />
    </Stack>
  );
}