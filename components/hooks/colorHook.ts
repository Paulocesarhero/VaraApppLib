import {useColorScheme} from "react-native";
/**
 * Hook personalizado para obtener el color del placeholder según el esquema de color actual (claro u oscuro).
 * Usa el esquema de color del sistema para determinar el color.
 *
 * @returns {string} El color del placeholder en formato hexadecimal:
 *                   - `#919090` para el modo oscuro.
 *                   - `#A9A9A9` para el modo claro.
 *
 * @example
 * // Importar el hook y usarlo en un componente
 * import {usePlaceholderColor} from "../hooks/colorHook";
 *
 * const placeholderColor = usePlaceholderColor();
 * <TextInput placeholderTextColor={placeholderColor} />;
 */
export const usePlaceholderColor = () => {
    const colorScheme = useColorScheme();
    return colorScheme === "dark" ? "#919090" : "#A9A9A9";
};