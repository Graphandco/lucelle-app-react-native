import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "./colors";

export function TextFont({ children, myColor, size, center }) {
    const styles = StyleSheet.create({
        fontText: {
            fontFamily: "OpenSans_400Regular",
            color: myColor ? myColor : "white",
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
export function TitleFont({ children, myColor, size, center }) {
    const styles = StyleSheet.create({
        fontText: {
            fontFamily: "BebasNeue_400Regular",
            color: myColor ? myColor : "white",
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

export function TitleH1({ children, myColor, size }) {
    const styles = StyleSheet.create({
        fontText: {
            fontFamily: "BebasNeue_400Regular",
            color: myColor ? myColor : Colors.accent,
            fontSize: size ? size : 50,
        },
    });
    return (
        <View>
            <Text style={styles.fontText}>{children}</Text>
        </View>
    );
}
export function TitleH2({ children, myColor, size, bold }) {
    const styles = StyleSheet.create({
        fontText: {
            fontFamily: "BebasNeue_400Regular",
            fontWeight: bold ? "bold" : "400",
            color: myColor ? myColor : Colors.accent,
            fontSize: size ? size : 38,
        },
    });
    return (
        <View>
            <Text style={styles.fontText}>{children}</Text>
        </View>
    );
}
