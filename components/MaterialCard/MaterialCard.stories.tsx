import MaterialCard from "./MaterialCard";
import React from "react";
import {AntDesign} from "@expo/vector-icons";
import {action} from "@storybook/addon-actions";
import {MaterialCardProps} from "./types";

export default {
    title: "Components/MaterialCard",
    component: MaterialCard,
    parameters: {
        docs: {
            description: {
                component:
                    "MaterialCard es un contenedor presionable personalizable.",
            },
        },
    },
};

export const Basic = () => {

    return (
        <MaterialCard
            label={"Información"}
            icon={<AntDesign name="infocirlceo" size={24} color="black" />}
            viewStyle={{backgroundColor: '#FFF'}}
            onPress={() => console.log("Press") }
        />
    );

};


export const Interactive = (args: Pick<MaterialCardProps, 'label' | 'viewStyle'>) => <MaterialCard {...args} />;
Interactive.args = {
    label: "Muestra",
    viewStyle: {backgroundColor: '#FFF'}
};