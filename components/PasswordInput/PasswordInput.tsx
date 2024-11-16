import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { PasswordInputStyle } from "./PasswordInput.style";
import { PasswordInputProps } from "./PasswordInputProps";
import { usePlaceholderColor } from "../hooks/colorHook";
import { Entypo } from "@expo/vector-icons";

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  onPasswordChange,
  ...props
}) => {
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const EyeIcon = isPasswordVisible ? (
    <Entypo name="eye-with-line" size={20} color="black" />
  ) : (
    <Entypo name="eye" size={20} color="black" />
  );
  const colorPlaceholder = usePlaceholderColor(); // Usa el color definido en el hook

  return (
    <View style={PasswordInputStyle.container}>
      <Pressable
        style={PasswordInputStyle.iconButton}
        onPress={togglePasswordVisibility}
      >
        {EyeIcon}
      </Pressable>
      <TextInput
        autoComplete="password"
        placeholderTextColor={colorPlaceholder}
        style={PasswordInputStyle.input}
        secureTextEntry={!isPasswordVisible}
        onChangeText={onPasswordChange}
        value={password}
        placeholder="Password"
        {...props}
      />
    </View>
  );
};

export default PasswordInput;
