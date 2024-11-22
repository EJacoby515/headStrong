import React from 'react';
import { Stack } from 'expo-router';

export default function ChatLayout() {
    return (
        <Stack>
            <Stack.Screen name = 'index' options = {{ title: 'Chat Options' }} />
            <Stack.Screen name = 'ai/index' options = {{ title: 'AI Chats' }} />
            <Stack.Screen name = 'ai/[chatId]'  options = {{ title: 'AI Chat' }} />
            <Stack.Screen name = 'peer/index' options = {{ title: 'Peer Chats' }}/>
            <Stack.Screen name = 'peer/[chatId]' options = {{ title: 'Peer Chat' }} />
        </Stack>
    );
}