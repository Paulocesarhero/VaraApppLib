import {StyleSheet} from "react-native";
import {COLORS} from "../../src/Constants/Colors";

export const MaterialPasswordStyle = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS.black,
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: "#000",
    },
    helperText: {
        fontSize: 14,
        color: COLORS.black,
        marginTop: 5,
    },
    errorText: {
        fontSize: 14,
        color: "#8B0000",
        marginTop: 5,
    },
});