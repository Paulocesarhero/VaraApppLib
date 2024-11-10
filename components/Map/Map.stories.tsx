import { View } from "react-native";
import React from "react";
import MapScreen from "./Map";

export default {
  title: "Components/Map",
  component: MapScreen,
  parameters: {
    docs: {
      description: {
        component:
          "Este componente permite mostrar una ubicación específica en " +
          "un mapa con un marcador, ideal para visualizar la posición de lugares en aplicaciones de geolocalización o mapas interactivos en una aplicación móvil desarrollada en",
      },
    },
  },
};

export const Basic = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapScreen></MapScreen>
    </View>
  );
};
