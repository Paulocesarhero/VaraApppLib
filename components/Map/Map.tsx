import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { MapProps } from "./types";

/**
 * Componente de mapa interactivo que permite al usuario seleccionar una ubicación
 * en el mapa y actualizar la posición del marcador.
 *
 * @param {MapProps} props - Las propiedades del componente.
 */
const Map: React.FC<MapProps> = ({
  markerLongitude,
  markerLatitude,
  onMarkerPositionChange,
}: MapProps) => {
  const [markerPosition, setMarkerPosition] = useState({
    latitude: markerLatitude,
    longitude: markerLongitude,
  });

  const handleMapPress = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    onMarkerPositionChange(longitude, latitude);
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: markerLatitude,
          longitude: markerLongitude,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
        onPress={handleMapPress}
      >
        <Marker
          coordinate={{
            latitude: markerLatitude,
            longitude: markerLongitude,
          }}
          title="Posicione el marcador donde fue el avistamiento"
          description="Seleccionando cualquier parte del mapa"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
