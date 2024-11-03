import React from "react";
import PasswordInput from "./PasswordInput";
import { action } from "@storybook/addon-actions";
import { PasswordInputProps } from "./PasswordInputProps";

export default {
    title: "Components/PasswordInput",
    component: PasswordInput,
    parameters: {
        docs: {
            description: {
                component: "PasswordInput es un campo de entrada para contraseñas con la opción de mostrar u ocultar la visibilidad de la contraseña.",
            },
        },
    },
};

export const Basic = () => (
    <PasswordInput
        placeholder="Password"
        onChangeText={action("onChangeText")}
    />
);

export const PasswordVisible = () => {
    const [isPasswordVisible, setPasswordVisibility] = React.useState(true);
    return (
        <PasswordInput
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            onChangeText={action("onChangeText")}
        />
    );
};

export const Interactive = (args: PasswordInputProps) => <PasswordInput {...args} />;
Interactive.args = {
    placeholder: "Password",
    onChangeText: action("onChangeText"),
};
