import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChatOptionss() {
    const router = useRouter();

    return (
        <View style = {styles.container}>
            <TouchableOpacity
            style = {styles.button}
            onPress={() => router.push('/chat/ai')}
            >
                <Text style = {styles.buttonText}>AI Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {styles.button}
            onPress={() => router.push('chat/peer')}
            >
                <Text style = {styles.buttonText}>Peer Chat</Text>
            </TouchableOpacity>
        </View>
    );
}

    const styles = StyleSheet.create ({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            backgroundColor: '#007AFF',
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 8,
            marginBottom: 8,
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '600',
        },
    });