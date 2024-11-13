import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CustomCheckBoxProps } from "./types";
import { CustomCheckBoxStyles } from "./CustomCheckBox.style";

/**
 * Componente de tipo checkBox que cuenta con el checkBox y su label.
 * Permite al usuario dar click sobre la casilla.
 *
 * @component
 * @param {CustomCheckBoxProps} props - Las propiedades del componente.
 * @example
 * <CustomCheckBox
 *       label="Acepta los términos y condiciones"
 *       isChecked={isChecked}
 *       onToggle={handleToggle}
 * />
 */

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  label,
  isChecked,
  onToggle,
}) => {
  return (
    <TouchableOpacity style={CustomCheckBoxStyles.container} onPress={onToggle}>
      <View
        style={[
          CustomCheckBoxStyles.box,
          isChecked && CustomCheckBoxStyles.checkedBox,
        ]}
      >
        {isChecked && <Ionicons name="checkmark" size={16} color="#fff" />}
      </View>
      <Text style={CustomCheckBoxStyles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckBox;
