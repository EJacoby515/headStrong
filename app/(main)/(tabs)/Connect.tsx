import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { router, useRouter } from "expo-router";

const Connect: React.FC = () => {
   return (
        <View style = { styles.container}>
            <StatusBar style = "light" />
            <Text style = {styles.title}> How would you like to connect?</Text>
            <TouchableOpacity style = {styles.button} onPress={() => { router.push('../../chat/ai/index.tsx')}}>
                <Text style = {styles.buttonText}>Chat with AI Assistance</Text>
                <Text style = {styles.buttonSubtext}>Available 24/7 for instant support</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => { router.push('../../chat/peer/index.tsx')}}>
                <Text style = {styles.buttonText}>Chat with a Peer</Text>
                <Text style = {styles.buttonSubtext}>Anonymous chat with another community member</Text>
            </TouchableOpacity>
            <Text style = {styles.disclaimer}>
                Note: Peer support in not A substitute for professional medical advice,disgnosis or treatment.
            </Text>
        </View>
   );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F7FA',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3A506B',
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
    buttonSubtext: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '400',
    },
    disclaimer: {
        marginTop: 20,
        padding: 10,
        color: '#E63946',
        textAlign: 'center',
    },
});
export default Connect;