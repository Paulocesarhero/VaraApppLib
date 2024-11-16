import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useController } from "react-hook-form";
import { MaterialPasswordStyle } from "./MaterialPassword.style";
import { PasswordInputProps } from "./types";

/**
 * Componente de entrada de contraseña que permite mostrar/ocultar la contraseña,
 * valida los requisitos de la contraseña y muestra mensajes de error si es necesario.
 *
 * @component
 * @param {PasswordInputProps} props - Propiedades del componente PasswordInput.
 * @param {string} props.label - La etiqueta que se mostrará para el campo de entrada de contraseña.
 * @param {string} props.placeholder - El texto de marcador de posición que se mostrará en el campo de entrada cuando esté vacío.
 * @param {boolean} [props.isRequired=true] - Indica si el campo de contraseña es obligatorio. Por defecto es true.
 * @param {string} props.name - El nombre del campo de contraseña, utilizado para el manejo del formulario con react-hook-form.
 * @param {Control<any>} props.control - El objeto de control de react-hook-form para gestionar el estado del formulario.
 * @param {TextInputProps} props... otherProps - Cualquier otra propiedad adicional que se pueda pasar al componente TextInput.
 *
 */

const MaterialPassword: React.FC<PasswordInputProps> = ({
  isRequired = true,
  label,
  placeholder,
  name,
  control,
  ...props
}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(true);
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: "",
    rules: {
      required: "La contraseña es requerida",
      maxLength: {
        value: 50,
        message: "La contraseña no puede tener más de 50 caracteres.",
      },
      validate: (value) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumbers = /\d/.test(value);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        const errors = [];

        if (value.length < minLength) {
          errors.push(`\nDebe tener al menos ${minLength} caracteres.`);
        }
        if (value === "") {
          return `${label} es requerido`; // Mensaje de error si el campo está vacío
        }
        if (!hasUpperCase) {
          errors.push("\nIngrese al menos una letra mayúscula.");
        }
        if (!hasLowerCase) {
          errors.push("\nIngrese al menos una letra minúscula.");
        }
        if (!hasNumbers) {
          errors.push("\nIngrese al menos un número.");
        }
        if (!hasSpecialChars) {
          errors.push("\nIngrese al menos un carácter especial.");
        }

        return errors.length > 0 ? errors.join(" ") : true; // Devuelve un mensaje de error o true si no hay errores
      },
    },
  });

  useEffect(() => {
    if (fieldState.invalid) {
      setIsErrorVisible(true);
    } else {
      setIsErrorVisible(false);
    }
  }, [fieldState]);

  const getBorderColor = (): string => {
    if (fieldState.error) {
      return "#8B0000";
    }
    return "#000";
  };

  return (
    <View style={MaterialPasswordStyle.container}>
      <Text style={MaterialPasswordStyle.label}>{label}</Text>
      <View
        style={[
          MaterialPasswordStyle.inputContainer,
          {
            borderColor: getBorderColor(),
          },
        ]}
      >
        <TextInput
          style={MaterialPasswordStyle.input}
          placeholder={placeholder}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          secureTextEntry={!isPasswordVisible}
          {...props}
        />
        {field.value !== "" && (
          <TouchableOpacity onPress={() => field.onChange("")}>
            <Entypo
              name="erase"
              style={{ marginRight: 2 }}
              size={24}
              color={getBorderColor()}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color={getBorderColor()}
          />
        </TouchableOpacity>
      </View>
      {isErrorVisible && (
        <Text style={MaterialPasswordStyle.errorText}>
          {fieldState.error
            ? fieldState.error.message
            : `${label} es requerido`}
        </Text>
      )}
    </View>
  );
};

export default MaterialPassword;
