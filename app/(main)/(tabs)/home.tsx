// File: app/(main)/(tabs)/home.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import AdaptiveChart from '@/app/src/components/adaptiveChart';

const mockMoodData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [3, 4, 3, 5, 4, 6, 5]
    }
  ]
};

const mockActivities = [
  { name: "Meditation", streak: 5 },
  { name: "Journaling", streak: 3 },
  { name: "Exercise", streak: 7 }
];

const dailyQuote = "You are capable of amazing things.";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const chartWidth = width - 60; // Adjust based on your padding

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to HeadStrong</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Mood This Week</Text>
        <AdaptiveChart data={mockMoodData} width={chartWidth} height={200} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activity Streaks</Text>
        {mockActivities.map((activity, index) => (
          <Text key={index} style={styles.activityText}>
            {activity.name}: {activity.streak} days
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Inspiration</Text>
        <Text style={styles.quoteText}>{dailyQuote}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 10,
  },
  activityText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
  },
});