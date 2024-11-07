import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { CustomCheckBoxProps } from './types';
import {CustomCheckBoxStyles} from './CustomCheckBox.style';

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ label, isChecked, onToggle }) => {
    return (
        <TouchableOpacity style={CustomCheckBoxStyles.container} onPress={onToggle}>
            <View style={[CustomCheckBoxStyles.box, isChecked && CustomCheckBoxStyles.checkedBox]}>
                {isChecked && <View style={CustomCheckBoxStyles.innerCheck} />}
            </View>
            <Text style={CustomCheckBoxStyles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

export default CustomCheckBox;