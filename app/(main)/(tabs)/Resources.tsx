import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";

const Resources: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.content}>
                <Text style={styles.title}>Resources</Text>
                <Text style={styles.text}>This is the resources page.</Text>
                <Text style={styles.title}>Need immediate help?</Text>
                <Text style={styles.title}>Call 988</Text>
                <Text style={styles.title}>YOU MATTER!</Text>
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
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        text: {
            fontSize: 16,
            color: '#5B6B7C',
            textAlign: 'center',
        },
        button: {
            backgroundColor: '#007AFF',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginTop: 20,
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 'bold',
            },
})
export default Resources;