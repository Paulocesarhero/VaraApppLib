import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { LoginFormStyle } from "./LoginForm.style";
import RoundedButton from "../RoundedButton/RoundedButton";
import PasswordInput from "../PasswordInput/PasswordInput";
import EmailInput from "../EmailInput/EmailInput";
import { LoginFormProps } from "./types";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

/**
 * Componente de formulario de inicio de sesión.
 *
 * Este componente permite a los usuarios ingresar su correo electrónico y contraseña,
 * y tiene un botón para enviar los datos de inicio de sesión.
 *
 * @param {LoginFormProps} props - Propiedades del componente.
 *
 * @example
 * ```tsx
 * <LoginForm
 *   email={userEmail}
 *   password={userPassword}
 *   onEmailChange={setUserEmail}
 *   onPasswordChange={setUserPassword}
 *   onLoginPress={handleLogin}
 * />
 * ```
 */
const LoginForm: React.FC<LoginFormProps> = ({
  email = "",
  password = "",
  onEmailChange,
  onPasswordChange,
  onLoginPress,
  buttonText = "Iniciar Sesión",
  loading = false,
}: LoginFormProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        style={LoginFormStyle.container}
        colors={["#024D76", "#3b5998", "#54AD94"]}
      >
        <Image
          source={require("./logo.png")}
          style={LoginFormStyle.image}
          contentFit={"contain"}
        />
        <View style={LoginFormStyle.form}>
          <Text style={LoginFormStyle.label}>Correo electrónico</Text>
          <EmailInput value={email} onEmailTextChange={onEmailChange} />
          <Text style={LoginFormStyle.label}>Contraseña</Text>
          <PasswordInput
            placeholder={"Contraseña"}
            password={password}
            onPasswordChange={onPasswordChange}
          />
          <RoundedButton
            style={{ marginVertical: 30 }}
            color={"#090909"}
            textSize={25}
            text={loading ? "Loading..." : buttonText}
            onPress={onLoginPress}
            disabled={loading}
          />
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;
