import { View, Text, StyleSheet, Image } from "react-native";
import { UserAuth } from "../../context/AuthContext";
import Logo from "./Logo";
import { COLORS } from "../../constants";

export default function Header() {
    const { user } = UserAuth();
    return (
        <>
            <View style={styles.statusBar}></View>
            <View style={styles.headerWrapper}>
                <Logo />
                {user && (
                    <Image
                        style={styles.image}
                        source={{ uri: user.photoURL }}
                    />
                )}
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: COLORS.accent,
        height: 30,
    },
    headerWrapper: {
        backgroundColor: COLORS.accent,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        // paddingVertical: 10,
    },
    image: {
        position: "absolute",
        right: 15,
        width: 35,
        height: 35,
        borderRadius: 100,
    },
});
