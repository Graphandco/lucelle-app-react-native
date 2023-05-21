import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "./colors";
import { COLORS } from "../../constants";

export function TextFont({ children, myColor, size, center, capitalize }) {
    const styles = StyleSheet.create({
        fontText: {
            fontFamily: "OpenSans_400Regular",
            color: myColor ? myColor : "white",
            fontSize: size ? size : 14,
            textAlign: center ? "center" : "auto",
            textTransform: capitalize ? "capitalize" : "none",
        },
    });
    return (
        <View>
            <Text style={styles.fontText}>{children}</Text>
        </View>
    );
}
export function TitleFont({ children, color, size, center }) {
    const styles = StyleSheet.create({
        fontText: {
            fontFamily: "BebasNeue_400Regular",
            color: color ? color : "white",
            fontSize: size ? size : 14,
            textAlign: center ? "center" : "auto",
        },
    });
    return (
        <View>
            <Text style={styles.fontText}>{children}</Text>
        </View>
    );
}

export function TitleH1({ children, myColor, size, center }) {
    const styles = StyleSheet.create({
        fontText: {
            fontFamily: "BebasNeue_400Regular",
            color: myColor ? myColor : COLORS.accent,
            fontSize: size ? size : 50,
            textAlign: center ? "center" : "auto",
        },
    });
    return (
        <View>
            <Text style={styles.fontText}>{children}</Text>
        </View>
    );
}
export function TitleH2({ children, color, size, bold }) {
    const styles = StyleSheet.create({
        fontText: {
            fontFamily: "BebasNeue_400Regular",
            fontWeight: bold ? "bold" : "400",
            color: color ? color : COLORS.accent,
            fontSize: size ? size : 38,
        },
    });
    return (
        <View>
            <Text style={styles.fontText}>{children}</Text>
        </View>
    );
}
