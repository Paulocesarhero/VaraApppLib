import React from "react";
import { View, ViewStyle } from "react-native";
import { CustomizableHeaderStyles } from "./CustomizableHeader.style";
import { CustomizableHeaderProps } from "./types";

/**
 * Componente de encabezado personalizable que permite agregar componentes
 * personalizados en las posiciones izquierda, central y derecha.
 *
 * @component
 */
const CustomizableHeader: React.FC<CustomizableHeaderProps> = ({
  containerStyle,
  leftComponent,
  centerComponent,
  rightComponent,
}) => {
  return (
    <View style={[CustomizableHeaderStyles.container, containerStyle]}>
      <View>{leftComponent}</View>
      <View style={CustomizableHeaderStyles.centerComponent}>
        {centerComponent}
      </View>
      <View>{rightComponent}</View>
    </View>
  );
};

export default CustomizableHeader;
