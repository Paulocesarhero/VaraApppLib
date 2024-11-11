import { Text, View } from "react-native";
import React, { useState } from "react";
import Map from "./Map";

export default {
  title: "Components/Map",
  component: Map,
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
  const [markerPosition, setMarkerPosition] = useState({
    longitude: -122.4324,
    latitude: 37.78825,
  });

  // Actualiza la posición del marcador en el estado
  const handleMarkerPositionChange = (longitude: number, latitude: number) => {
    setMarkerPosition({ longitude, latitude });
  };

  return (
    <View style={{ flex: 1 }}>
      <Map
        markerLatitude={markerPosition.latitude}
        markerLongitude={markerPosition.longitude}
        onMarkerPositionChange={handleMarkerPositionChange}
      />
      <Text>
        Longitud: {markerPosition.longitude.toFixed(6)}, Latitud:{" "}
        {markerPosition.latitude.toFixed(6)}
      </Text>
    </View>
  );
};
