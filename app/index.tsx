// File: app/index.tsx

import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const features = [
  "Effortless Tracking",
  "Intelligent Insights",
  "Bro-to-Bro Support",
  "Gamified Challenges",
  "Tailored Resources",
  "Professional Help",
  "Visualize Your Journey",
  "Crisis Support",
  "Secure and Private",
  "Inclusive and Welcoming"
];

const LandingPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Image 
          source={require('../assets/images/hS-logo.png')} 
          style={styles.logo} 
          resizeMode="contain" 
        />
        <Text style={styles.title}>Empowering Men to Take Control of Their Mental Well-being</Text>

        <Text style={styles.description}>
          A groundbreaking mental health app designed to address the unique challenges faced by men while fostering an inclusive environment for all users.
        </Text>

        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Key Features</Text>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItemContainer}>
              <Text style={styles.featureBullet}>•</Text>
              <Text style={styles.featureItem}>{feature}</Text>
            </View>
          ))}
        </View>

        <Link href="/auth" asChild>
          <Text style={styles.ctaButton}>Get Started</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
    alignItems: 'center',
  },
  logo: {
    width: 150,  // Static width
    height: 150, // Static height
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3A506B',
    textAlign: 'center',
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: '#5B6B7C',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  featuresContainer: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
  },
  featuresTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A506B',
    marginBottom: 16,
  },
  featureItemContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  featureBullet: {
    fontSize: 18,
    color: '#6FAFE8',
    marginRight: 8,
  },
  featureItem: {
    fontSize: 16,
    color: '#5B6B7C',
    flex: 1,
  },
  ctaButton: {
    backgroundColor: '#6FAFE8',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 30,
    borderRadius: 30,
    textAlign: 'center',
    overflow: 'hidden',
    shadowColor: '#6FAFE8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default LandingPage;