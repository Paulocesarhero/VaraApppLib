import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { PasswordInputStyle } from "./PasswordInput.style";
import { PasswordInputProps } from "./PasswordInputProps";
import { NoVisibleEye, VisibleEye } from "../../src/icons/icons";
import {usePlaceholderColor} from "../hooks/colorHook";
/**
 * Componente de entrada de contraseña que permite mostrar y ocultar el texto ingresado.
 * Incluye un ícono interactivo para alternar la visibilidad de la contraseña.
 *
 * @component
 * @param {PasswordInputProps} props - Las propiedades del componente de entrada de contraseña.
 * @returns {React.ReactElement} Un campo de entrada de contraseña con un ícono de visibilidad.
 *
 * @example
 * // Uso en un formulario
 *
 * const MyFormComponent = () => (
 *   <PasswordInput
 *     placeholder="Ingrese su contraseña"
 *     onChangeText={(text) => console.log(text)}
 *   />
 * );
 */

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const EyeIcon = isPasswordVisible ? NoVisibleEye : VisibleEye;
  const colorPlaceholder = usePlaceholderColor(); // Usa el color definido en el hook

  return (
    <View style={PasswordInputStyle.container}>
      <TextInput
        autoComplete="password"
        placeholderTextColor={colorPlaceholder}
        style={PasswordInputStyle.input}
        secureTextEntry={!isPasswordVisible} // Contraseña oculta por defecto
        placeholder="Password"
        {...props}
      />
      <Pressable
        style={PasswordInputStyle.iconButton}
        onPress={togglePasswordVisibility}
      >
        <EyeIcon size={24} color="gray" />
      </Pressable>
    </View>
  );
};

export default PasswordInput;
