// File: app/(main)/_layout.tsx

import React from 'react';
import { Tabs, Stack } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="settings" 
        options={{ 
          presentation: 'modal',
          headerTitle: 'Settings'
        }} 
      />
    </Stack>
  );
}

export function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6FAFE8',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="Track" 
        options={{
          title: 'Track',
          tabBarIcon: ({ color, size }) => (
            <Feather name="activity" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="Connect" 
        options={{
          title: 'Connect',
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="Resources" 
        options={{
          title: 'Resources',
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}