import {Text, View} from "react-native";
import React from "react";
import {LoginFormStyle} from "./LoginForm.style";
import RoundedButton from "../RoundedButton/RoundedButton";
import {COLORS} from "../../src/Constants/Colors";
import PasswordInput from "../PasswordInput/PasswordInput";
import EmailInput from "../EmailInput/EmailInput";
import {LoginFormProps} from "./types";

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
  buttonText = "Log in",
  loading = false,
}: LoginFormProps) => {
  return (
    <View style={LoginFormStyle.container}>
      <Text style={LoginFormStyle.label}>Correo electrónico</Text>
      <EmailInput value={email} onEmailTextChange={onEmailChange} />
      <Text style={LoginFormStyle.label}>Contraseña</Text>
      <PasswordInput
        placeholder={"Contraseña"}
        value={password}
        onChangeText={onPasswordChange}
      />
      <RoundedButton
        style={{ marginVertical: 30 }}
        color={COLORS.primary}
        text={loading ? "Loading..." : buttonText}
        onPress={onLoginPress}
        disabled={loading}
      />
    </View>
  );
};

export default LoginForm;
