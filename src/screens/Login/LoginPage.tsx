import React from "react";
import {
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LoginPageStyle } from "./LoginPage.style";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../Constants/Colors";
import { Image } from "expo-image";
import LoginForm from "../../components/LoginForm/LoginForm";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {LoginPageProps} from "./types";
/**
 * Página de inicio de sesión de la aplicación.
 *
 * Este componente representa la interfaz de la página de inicio de sesión,
 * incluye un formulario para ingresar credenciales, opción para recuperación de contraseña,
 * y un enlace para registro.
 *
 * @component
 * @param {function} handleRegistroCientifico - Función que se llama cuando el usuario presiona el enlace para crear una cuenta.
 * @param {LoginFormProps} props - Propiedades adicionales que se pasan al componente `LoginForm`.
 *
 * @example
 * ```tsx
 * <LoginPage
 *   handleRegistroCientifico={handleRegistro}
 *   email={userEmail}
 *   password={userPassword}
 *   onEmailChange={setUserEmail}
 *   onPasswordChange={setUserPassword}
 *   onLoginPress={handleLogin}
 * />
 * ```
 */

const LoginPage: React.FC<LoginPageProps> = ({
    handleRegistroCientifico,
    ...props
}: LoginPageProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaProvider>
        <SafeAreaView style={LoginPageStyle.container} edges={["top"]}>
          <LinearGradient
            colors={[
              COLORS.gradientStart,
              COLORS.gradientMiddle,
              COLORS.gradientEnd,
            ]}
            style={LoginPageStyle.background}
          >
            <Image
              source={require("../../assets/logo.imageset/logo.png")}
              style={LoginPageStyle.image}
            />
            <LoginForm
                {...props}
            />
            <View style={LoginPageStyle.containerForgotPassword}>
              <Pressable>
                <Text
                  style={[
                    LoginPageStyle.textForgotPassword,
                    LoginPageStyle.textBold,
                  ]}
                >
                  ¿Olvidaste tu contraseña?
                </Text>
              </Pressable>
              <Text
                style={[
                  LoginPageStyle.textForgotPassword,
                  LoginPageStyle.spaceBetweenText,
                ]}
              >
                ¿No tienes una cuenta?
                <Pressable onPress={handleRegistroCientifico}>
                  <Text
                    style={[
                      LoginPageStyle.textForgotPassword,
                      LoginPageStyle.textBold,
                      LoginPageStyle.space,
                    ]}
                  >
                    Crear cuenta
                  </Text>
                </Pressable>
              </Text>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </SafeAreaProvider>
    </TouchableWithoutFeedback>
  );
};

export default LoginPage;
