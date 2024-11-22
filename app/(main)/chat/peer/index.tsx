import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// Mock data - replace with actual data fetching logic
const chatList = [
  { id: '1', title: 'Anxiety Management' },
  { id: '2', title: 'Sleep Issues' },
  // ... more chats
];

export default function ChatList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={chatList}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.chatItem}
            onPress={() => router.push(`/chat/ai/${item.id}`)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity 
        style={styles.newChatButton}
        onPress={() => router.push('/chat/ai/new')}
      >
        <Text style={styles.newChatButtonText}>+ New Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  chatItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  newChatButton: {
    backgroundColor: '#6FAFE8',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  newChatButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});