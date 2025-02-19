import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ModalDropdownPicker from 'react-native-modal-dropdown-picker';
import { DropdownData } from 'react-native-modal-dropdown-picker';

const ExampleScreen: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>('');

    const dropdownData: DropdownData[] = [
        {
            placeholder: 'Select State',
            options: {
                'New York': ['New York'],
                California: ['California'],
                Texas: ['Texas'],
            },
        },
        {
            placeholder: 'Select Menu',
            options: {
                Food: ['F1', 'F2', 'F3', 'F4'],
            },
        },
    ];

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.openButtonText}>Open Modal Dropdown Picker</Text>
            </TouchableOpacity>
            <Text style={styles.selectedText}>Selected: {selectedValue}</Text>
            <ModalDropdownPicker
                visible={modalVisible}
                onConfirm={(value: string) => {
                    setSelectedValue(value);
                    setModalVisible(false);
                }}
                onCancel={() => setModalVisible(false)}
                dropdownData={dropdownData}
                layoutDirection='horizontal'
                isLinked={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    openButton: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    openButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectedText: {
        marginTop: 20,
        fontSize: 14,
        color: '#333',
    },
});

export default ExampleScreen;
