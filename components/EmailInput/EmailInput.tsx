import { TextInput, View } from "react-native";
import React from "react";
import { emailInputStyle } from "./EmailInput.style";
import { EmailInputProps } from "./EmailInputProps";
import {usePlaceholderColor} from "../hooks/colorHook";

const EmailInput: React.FC<EmailInputProps> = ({
  onEmailTextChange,
  emailCustomStyle,
    email,
}) => {
    const colorPlaceholder = usePlaceholderColor(); // Usa el color definido en el hook

    return (
    <View>
      <TextInput
        onChangeText={onEmailTextChange}
        value={email}
        style={[emailInputStyle.input, emailCustomStyle]}
        placeholder={"correo electrónico"}
        placeholderTextColor={colorPlaceholder}
        autoComplete={"email"}
        keyboardType={"email-address"}
        textContentType={"emailAddress"}
      ></TextInput>
    </View>
  );
};

export default EmailInput;
