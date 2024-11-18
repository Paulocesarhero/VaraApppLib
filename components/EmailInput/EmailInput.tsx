import { TextInput, View } from "react-native";
import React from "react";
import { emailInputStyle } from "./EmailInput.style";
import { EmailInputProps } from "./EmailInputProps";
import { usePlaceholderColor } from "../hooks/colorHook";
import { Entypo } from "@expo/vector-icons";

const EmailInput: React.FC<EmailInputProps> = ({
  onEmailTextChange,
  emailCustomStyle,
  email,
}) => {
  const colorPlaceholder = usePlaceholderColor(); // Usa el color definido en el hook

  return (
    <View style={emailInputStyle.container}>
      <Entypo
        name="mail"
        size={20}
        color="black"
        style={emailInputStyle.icon}
      />
      <TextInput
        onChangeText={onEmailTextChange}
        value={email}
        style={[emailInputStyle.input, emailCustomStyle]}
        placeholder={"correo electrónico"}
        placeholderTextColor={colorPlaceholder}
        autoComplete={"email"}
        keyboardType={"email-address"}
        textContentType={"emailAddress"}
      />
    </View>
  );
};

export default EmailInput;
