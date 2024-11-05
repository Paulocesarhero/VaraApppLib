import React from "react";
import EmailInput from "./EmailInput";
import { action } from "@storybook/addon-actions";

export default {
    title: "Components/EmailInput",
    component: EmailInput,
    parameters: {
        docs: {
            description: {
                component:
                    "EmailInput es un componente que permite a los usuarios ingresar su dirección de correo electrónico.",
            },
        },
    },
};

// Historia básica del componente
export const Basic = () => (
    <EmailInput
        onEmailTextChange={action("onEmailTextChange")}
    />
);

// Historia interactiva que permite pasar props a través de controles de Storybook
export const Interactive = (args:any) => <EmailInput {...args} />;
Interactive.args = {
    onEmailTextChange: action("onEmailTextChange"),
    emailCustomStyle: {}, // Puedes modificar esto para cambiar el estilo
};
