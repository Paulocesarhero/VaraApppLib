import {MaterialCardProps} from "./types";
import {Pressable, Text, View} from "react-native";
import {MaterialCardStyles} from "./MaterialCard.style";

/**
 * Componente de Card que muestra un texto y un ícono.
 * Permite al usuario dar click.
 *
 * @component
 * @param {MaterialCardProps} props - Las propiedades del componente.
 * @example
 * <MaterialCard
 *   label={"Información"}
 *   icon={<AntDesign name="infocirlceo" size={24} color="black" />}
 *   viewStyle={{backgroundColor: '#FFF'}}
 *   onPress={() => console.log("Press") }
 * />
 */

const MaterialCard: React.FC <MaterialCardProps> = ( { icon, label, viewStyle, ...props})=> {

    return(
        <Pressable
            {...props}
        >
            <View
                style={[MaterialCardStyles.container, viewStyle]}
            >
                <View
                    style={MaterialCardStyles.containerImage}
                >
                    {icon}
                </View>
                <Text
                    style={MaterialCardStyles.containerLabelText}
                >
                    {label}
                </Text>
            </View>
        </Pressable>

    )
}

export default MaterialCard;