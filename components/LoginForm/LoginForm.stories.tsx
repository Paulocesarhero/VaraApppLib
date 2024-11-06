import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/LoginForm",
  component: LoginForm,
  parameters: {
    docs: {
      description: {
        component:
          "Componente de formulario de inicio de sesión que permite a los usuarios ingresar su correo electrónico y contraseña, y tiene un botón para enviar los datos de inicio de sesión.",
      },
    },
  },
};

// Ejemplo de historia básica
export const Basic = () => (
  <LoginForm
    email=""
    onEmailChange={action("onEmailChange")}
    onPasswordChange={action("onPasswordChange")}
    onLoginPress={action("email")}
  />
);

// Ejemplo de historia básica
export const Basic2 = () => {
  // Estado local para manejar el email y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginForm
      email={email} // Estado del email
      password={password} // Estado de la contraseña
      onEmailChange={(newEmail) => {
        setEmail(newEmail); // Actualiza el email en el estado
        action("onEmailChange")(newEmail); // Captura la acción
      }}
      onPasswordChange={(newPassword) => {
        setPassword(newPassword); // Actualiza la contraseña en el estado
        action("onPasswordChange")(newPassword); // Captura la acción
      }}
      onLoginPress={() => {
        action("onLoginPress")({ email, password });
      }}
    />
  );
};

// Historia que muestra el estado de carga
export const LoadingState = () => (
  <LoginForm
    email="test@example.com"
    password="password123"
    onEmailChange={action("onEmailChange")}
    onPasswordChange={action("onPasswordChange")}
    onLoginPress={action("onLoginPress")}
    loading={true}
  />
);
