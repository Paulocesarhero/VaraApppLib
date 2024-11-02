import React from "react";
import InformacionPersonalForm from "./InformacionPersonalForm";
import { action } from "@storybook/addon-actions";

export default {
    title: "Components/InformacionPersonalForm",
    component: InformacionPersonalForm,
    parameters: {
        docs: {
            description: {
                component:
                    "InformacionPersonalForm es un formulario que permite al usuario ingresar y actualizar su información personal.",
            },
        },
    },
};

// Ejemplo de historias individuales
export const Basic = () => (
    <InformacionPersonalForm
        onSubmitData={action("onSubmitData")}
        loading={false}
        setLoading={action("setLoading")}
    />
);

export const LoadingState = () => (
    <InformacionPersonalForm
        onSubmitData={action("onSubmitData")}
        loading={true}
        setLoading={action("setLoading")}
    />
);

// Historia interactiva que permite pasar props a través de controles de Storybook
export const Interactive = (args: any) => <InformacionPersonalForm {...args} />;
Interactive.args = {
    loading: false,
    onSubmitData: action("onSubmitData"),
    setLoading: action("setLoading"),
};
