import {Text, View} from "react-native";
import React from "react";
import { LoginFormStyle } from "./LoginForm.style";
import RoundedButton from "../RoundedButton/RoundedButton";
import PasswordInput from "../PasswordInput/PasswordInput";
import EmailInput from "../EmailInput/EmailInput";
import { LoginFormProps } from "./types";
import { LinearGradient } from "expo-linear-gradient";
import {LoginPageStyle} from "../../src/screens/Login/LoginPage.style";
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
  buttonText = "Log in",
  loading = false,
}: LoginFormProps) => {
  return (
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
            value={password}
            onChangeText={onPasswordChange}
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
  );
};

export default LoginForm;
