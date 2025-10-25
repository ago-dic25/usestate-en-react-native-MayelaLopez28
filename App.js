import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import { estiloTextos } from './misEstilos';

const getCount = (str) => {
    return Array.from(str).length;
};

export default function App() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('Hola');
    const nameLength = getCount(name);

    const getEmoji = (length) => {
        if (length === 0) {
            return '🫠';
        } else if (length <= 5) {
            return '😊';
        } else if (length <= 10) {
            return '😁';
        } else {
            return '😆';
        }
    };

    const Emoji = getEmoji(nameLength);

    const handleClear = () => {
        setName('');
        setMessage('Hola');
    };

    const handleShowName = () => {
        setMessage(`Hola, ${name || ''}!`);
    };

    return (
        <View style={styles.container}>
            <Text style={[estiloTextos.texto, styles.messageText]}>
                {Emoji} {message}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Escribe tu nombre"
                placeholderTextColor="#BEAED0"
                onChangeText={setName}
                value={name}
            />

            <Text style={styles.counterText}>
                Caracteres: {nameLength}
            </Text>

            <Button
                title="Mostrar Mensaje"
                onPress={handleShowName}
                color="#75619D"
            />

            <View style={styles.buttonContainer}>
                <Button
                    title="Limpiar"
                    onPress={handleClear}
                    color="#E6EFF7"
                />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F2A52',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    messageText: {
        marginBottom: 20,
        fontSize: 24
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: '#75619D',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: '#E6EFF7',
        backgroundColor: '#3A2D34',
        borderRadius: 5,
        marginBottom: 10,
    },
    counterText: {
        color: '#BEAED0',
        marginTop: 10,
        marginBottom: 20
    },
    buttonContainer: {
        marginTop: 10,
        width: '80%',
    },
});