import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Logo from "./Logo";

export default function Header() {
    return (
        <>
            <View style={styles.statusBar}></View>
            <View style={styles.headerWrapper}>
                <Logo />
                {/* <Text>Menu</Text> */}
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "white",
        height: 30,
    },
    headerWrapper: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        // paddingVertical: 10,
    },
});
