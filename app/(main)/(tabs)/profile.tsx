// File: app/(main)/profile.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';
import { auth, db, getCurrentUser } from '../../src/utils/firebaseAuth';

interface UserData {
  name: string;
  email: string;
  // Add other user data fields as needed
}

export default function ProfileScreen() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchUserData() {
      const currentUser = getCurrentUser();

      if (!currentUser) {
        setError('No user is Signed in');
        setLoading(false);
        return;
      }

      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data() as UserData);
        } else {
          setError('User data not found');
        }
      } catch (err) {
        setError('Error fetching User Data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);

  const navigateToSettings = () => {
    router.push('/settings');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#6FAFE8" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={navigateToSettings} style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="#6FAFE8" />
        </TouchableOpacity>
      </View>
      
      {userData && (
        <View style={styles.userInfo}>
          <Text style={styles.infoText}>Name: {userData.name}</Text>
          <Text style={styles.infoText}>Email: {userData.email}</Text>
          {/* Add more user data fields here */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A506B',
  },
  settingsButton: {
    padding: 10,
  },
  userInfo: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#3A506B',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});