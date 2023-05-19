import { View, Text, Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export function PrimaryButton({ children, myColor, size, onPress, outline }) {
    const styles = StyleSheet.create({
        buttonWrapper: {
            backgroundColor: outline ? "transparent" : COLORS.accent,
            borderRadius: 5,
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderColor: "white",
            borderWidth: outline ? 1 : 0,
        },
        buttonText: {
            fontFamily: "OpenSans_600SemiBold",
            color: myColor ? myColor : COLORS.bgColor,
            fontSize: size ? size : 16,
        },
    });
    return (
        <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
}
