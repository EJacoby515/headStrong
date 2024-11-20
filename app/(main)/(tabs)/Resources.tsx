import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";

interface ResourceCategory {
  title: string;
  subcategories: string[];
}

const resourceCategories: ResourceCategory[] = [
  {
    title: "Mood Disorders",
    subcategories: ["Depression", "Anxiety", "Bipolar Disorder", "Seasonal Affective Disorder"]
  },
  {
    title: "Relationships",
    subcategories: ["Family Issues", "Romantic Relationships", "Friendships", "Workplace Relationships"]
  },
  {
    title: "Trauma & Stress",
    subcategories: ["PTSD", "Acute Stress", "Grief & Loss", "Childhood Trauma"]
  },
  {
    title: "Substance Use",
    subcategories: ["Alcohol", "Drug Addiction", "Smoking Cessation", "Recovery Support"]
  },
  {
    title: "LGBTQ+",
    subcategories: ["Coming Out", "Gender Identity", "LGBTQ+ Mental Health", "Discrimination & Bullying"]
  },
  {
    title: "Life Challenges",
    subcategories: ["Career Stress", "Financial Stress", "Life Transitions", "Identity & Self-Esteem"]
  },
  {
    title: "Self-Improvement",
    subcategories: ["Mindfulness", "Stress Management", "Goal Setting", "Personal Growth"]
  }
];

const Resources: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Resources</Text>
          <Text style={styles.emergencyText}>Need immediate help? Call 988</Text>
          <Text style={styles.emphaticText}>YOU MATTER!</Text>
        </View>
        
        {resourceCategories.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            {category.subcategories.map((subcategory, subIndex) => (
              <TouchableOpacity 
                key={subIndex} 
                style={styles.subcategoryButton}
                onPress={() => {/* Handle subcategory selection */}}
              >
                <Text style={styles.subcategoryText}>{subcategory}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3A506B',
  },
  emergencyText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#E63946',
  },
  emphaticText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  categoryContainer: {
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3A506B',
  },
  subcategoryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 8,
  },
  subcategoryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Resources;