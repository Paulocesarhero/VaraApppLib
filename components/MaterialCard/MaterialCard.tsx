import {MaterialCardProps} from "./MaterialCardProps";
import {Pressable, Text, View} from "react-native";
import {MaterialCardStyles} from "./MaterialCard.style";


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