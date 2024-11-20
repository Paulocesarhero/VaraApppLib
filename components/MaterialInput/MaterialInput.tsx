import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { MaterialInputStyle } from "./MaterialInput.style";
import { MaterialInputProps } from "./types";
import { useController } from "react-hook-form";
import useTheme from "../hooks/useTheme";

/**
 * Componente de campo de entrada que muestra un texto y un ícono.
 * Permite al usuario ingresar texto y proporciona validación básica.
 *
 * @component
 * @param {MaterialInputProps} props - Las propiedades del componente.
 * @example
 * <InputField
 *   label="Nombre"
 *   placeholder="Ingrese su nombre"
 *   isRequired={true}
 *   iconName="user"
 *   iconFamily="Entypo"
 *   control={control}
 *   nameInput="nombre" // Asegúrate de que este sea el nombre correcto para el controlador
 * />
 */

const InputField: React.FC<MaterialInputProps> = ({
  isRequired = true,
  label,
  placeholder,
  iconName = "person",
  iconFamily = "Ionicons",
  control,
  nameInput,
  validateRules = {},
  ...props
}: MaterialInputProps) => {
  const theme = useTheme();
  const { field, fieldState } = useController({
    name: nameInput,
    control,
    rules: {
      required: isRequired ? `${label} es requerido` : false,
      ...validateRules,
    },
  });

  const getBorderColor = (): string => {
    if (fieldState.error) {
      return "#8B0000";
    }
    return theme.text.color;
  };

  const renderIcon = () => {
    const color = getBorderColor();
    if (iconFamily === "Ionicons") {
      // @ts-ignore
      return <Ionicons name={iconName} size={24} color={color} />;
    } else if (iconFamily === "Entypo") {
      // @ts-ignore
      return <Entypo name={iconName} size={24} color={color} />;
    }
    return null;
  };

  return (
    <View style={[MaterialInputStyle.container, theme.background]}>
      <Text style={[MaterialInputStyle.label, theme.text]}>{label}</Text>
      <View
        style={[
          MaterialInputStyle.inputContainer,
          {
            borderColor: getBorderColor(),
          },
        ]}
      >
        {renderIcon()}
        <TextInput
          style={[MaterialInputStyle.input, theme.text]}
          placeholder={placeholder}
          value={field.value}
          placeholderTextColor={theme.textPlaceholder.color}
          onChangeText={field.onChange}
          {...props}
        />
        {field.value !== "" && (
          <TouchableOpacity
            onPress={() => {
              field.onChange("");
            }}
          >
            <Entypo name="erase" size={24} color={getBorderColor()} />
          </TouchableOpacity>
        )}
      </View>
      {fieldState.error && (
        <Text style={MaterialInputStyle.helperText}>
          {fieldState.error.message}
        </Text>
      )}
    </View>
  );
};

export default InputField;
