import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";

const Track: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.content}>
                <Text style={styles.title}>Track</Text>
            </View>
        </SafeAreaView>
    )
}
    const styles = StyleSheet.create ({
        container: {
            flex: 1,
            backgroundColor: '#F5F7FA',
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            },
            title: {
                fontSize: 24,
                fontWeight: 'bold',
                color: '#333',
                },
    })
export default Track;