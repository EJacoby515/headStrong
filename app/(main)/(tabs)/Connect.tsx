import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";

const Connect: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.content}>
                <Text style={styles.title}>Connect</Text>
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
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
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
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    link: {
        color: '#007AFF',
        marginTop: 10,
    },   
})
export default Connect;