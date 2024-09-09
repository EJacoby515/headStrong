import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to HeadStrong</Text>
        <Text style={styles.subtitle}>Your journey to mental wellness starts here</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A506B',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#5B6B7C',
    textAlign: 'center',
  },
});

export default HomeScreen;