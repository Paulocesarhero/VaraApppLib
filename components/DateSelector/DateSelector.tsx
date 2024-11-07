import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, useColorScheme, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { DateSelectorProps } from './types';
import { styles } from './DateSelector.style';

const DateSelector: React.FC<DateSelectorProps> = ({ label = "Select Date", onDateChange }) => {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const colorScheme = useColorScheme();
    const placeholderTextColor = colorScheme === 'dark' ? '#919090' : '#A9A9A9';

    useEffect(() => {
        const currentDate = new Date();
        setDate(currentDate);
        onDateChange && onDateChange(currentDate);
    }, []);

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowPicker(false);
        if (selectedDate) {
            setDate(selectedDate);
            onDateChange && onDateChange(selectedDate);
        }
    };

    // Format date as YYYY-MM-DD
    const formattedDate = date.toISOString().split('T')[0];

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity
                style={styles.inputContainer}
                onPress={() => setShowPicker(true)}
            >
                <Ionicons name="calendar" size={24} color="#000" />
                <Text style={[styles.dateText, { color: placeholderTextColor }]}>
                    {formattedDate}
                </Text>
                <Ionicons name="chevron-down" size={24} color="#000" />
            </TouchableOpacity>

            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'inline' : 'default'}
                    onChange={handleDateChange}
                />
            )}
        </View>
    );
};

export default DateSelector;
