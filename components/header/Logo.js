import { View, Text, Image, StyleSheet } from "react-native";
import { TitleH2 } from "../ui/Fonts";
import { COLORS, images } from "../../constants";

export default function Logo() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={images.logo} />
            </View>
            <View style={styles.textWrapper}>
                <TitleH2 color={COLORS.bgColor} size={25}>
                    Lucelle'App
                </TitleH2>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        paddingVertical: 3,
    },
    imageWrapper: {
        // position: "absolute",
        // backgroundColor: "white",
        borderRadius: 100,
        // transform: [{ translateY: 20 }],
        // padding: 8,
    },
    image: {
        width: 40,
        height: 40,
    },
    textWrapper: {
        // marginLeft: 90,
        // transform: [{ translateY: 5 }],
    },
});
