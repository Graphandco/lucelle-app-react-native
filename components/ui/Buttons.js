import { View, Text, Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "./colors";

export function PrimaryButton({ children, myColor, size, onPress, outline }) {
    const styles = StyleSheet.create({
        buttonWrapper: {
            backgroundColor: outline ? "transparent" : Colors.accent,
            borderRadius: 5,
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderColor: "white",
            borderWidth: outline ? 1 : 0,
        },
        buttonText: {
            fontFamily: "OpenSans_600SemiBold",
            color: myColor ? myColor : Colors.bgColor,
            fontSize: size ? size : 16,
        },
    });
    return (
        <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
}
