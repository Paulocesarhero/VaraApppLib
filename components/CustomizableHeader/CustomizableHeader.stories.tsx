import CustomizableHeader from "./CustomizableHeader";
import { View, Text } from "react-native";
import React from "react";

export default {
  title: "Components/CustomizableHeader",
  component: CustomizableHeader,
  parameters: {
    docs: {
      description: {
        component:
          "este componente sirve como el header de las aplicaciones" +
          "se le podra pasar cualquier componente y estos se alinearan a la " +
          "izquierda derecha y centro respectivamente",
      },
    },
  },
};

export const Basic = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomizableHeader
        containerStyle={{ backgroundColor: "#837979" }}
        centerComponent={<Text>centro</Text>}
        leftComponent={<Text>izquierda</Text>}
        rightComponent={<Text>Derecho</Text>}
      ></CustomizableHeader>
    </View>
  );
};
