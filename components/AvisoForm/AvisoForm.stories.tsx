import { AvisoForm } from "./AvisoForm";
import React from "react";
import { action } from "@storybook/addon-actions";
import { Pressable, Text, View } from "react-native";

export default {
  title: "Components/AvisoForm",
  component: AvisoForm,
  parameters: {
    docs: {
      description: {
        component:
          "AvisoForm es un formulario que permite al usuario ingresar los datos de un aviso.",
      },
    },
  },
};

export const Basic = () => {
  return (
    <View style={{ flex: 1 }}>
      <AvisoForm
        onSubmitData={action("onSubmitData")}
        loading={false}
        setLoading={action("setLoading")}
        data={{
          Nombre: "Paulo",
          Telefono: "2282522839",
          Fotografia: "https://via.placeholder.com/300",
          FechaDeAvistamiento: "2024-12-30",
          Sustrato: 1,
          FacilAcceso: true,
          Acantilado: false,
          LugarDondeSeVio: 0,
          TipoDeAnimal: "Ave",
          Observaciones: "Se ve saludable",
          CondicionDeAnimal: 2,
          CantidadDeAnimales: "",
          InformacionDeLocalizacion: "Cerca de la entrada principal",
          Latitud: "",
          Longitud: "",
        }}
        onValuesChange={action("onValuesChange")}
      />
    </View>
  );
};
//Recomiendo siempre usar datos por defecto
export const BasicSinData = () => {
  return (
    <View style={{ flex: 1 }}>
      <AvisoForm
        onSubmitData={action("onSubmitData")}
        loading={false}
        setLoading={action("setLoading")}
        onValuesChange={action("onValuesChange")}
      />
    </View>
  );
};

export const BasicPersonalizable = () => {
  const CustomButton = ({ onPress }: { onPress?: () => void }) => (
    <Pressable
      onPress={onPress}
      style={{
        padding: 10,
        position: "absolute",
        top: 10,
        left: 10,
        right: 10,
        zIndex: 10,
        backgroundColor: "#f0f0f0",
      }}
    >
      <Text>Custom Button</Text>
    </Pressable>
  );
  return (
    <View style={{ flex: 1 }}>
      <AvisoForm
        onSubmitData={action("onSubmitData")}
        loading={false}
        reactNodeButton={CustomButton}
        setLoading={action("setLoading")}
        data={{
          Nombre: "Paulo",
          Telefono: "2282522839",
          Fotografia: "https://via.placeholder.com/300",
          FechaDeAvistamiento: "2024-12-30",
          Sustrato: 1,
          FacilAcceso: true,
          Acantilado: false,
          LugarDondeSeVio: 0,
          TipoDeAnimal: "Ave",
          Observaciones: "Se ve saludable",
          CondicionDeAnimal: 2,
          CantidadDeAnimales: "",
          InformacionDeLocalizacion: "Cerca de la entrada principal",
          Latitud: "19.432608",
          Longitud: "-99.133209",
        }}
        onValuesChange={action("onValuesChange")}
      />
    </View>
  );
};

export const Disabled = () => (
  <AvisoForm
    onSubmitData={action("onSubmitData")}
    loading={false}
    setLoading={action("setLoading")}
    isDisabled={true}
    data={{
      Nombre: "Paulo",
      Telefono: "2282522839",
      Fotografia: "https://via.placeholder.com/300",
      FechaDeAvistamiento: "2024-12-30T10:00:00",
      Sustrato: 1,
      FacilAcceso: true,
      Acantilado: false,
      LugarDondeSeVio: 0,
      TipoDeAnimal: "Ave",
      Observaciones: "Se ve saludable",
      CondicionDeAnimal: 2,
      CantidadDeAnimales: "",
      InformacionDeLocalizacion: "Cerca de la entrada principal",
      Latitud: "19.432608",
      Longitud: "-99.133209",
    }}
    onValuesChange={action("onValuesChange")}
  />
);
