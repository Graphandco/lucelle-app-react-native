import { View, Text, StyleSheet } from "react-native";
import Profil from "../components/profil/Profil";
import { COLORS } from "../constants";

const ProfilScreen = () => {
    return (
        <View style={styles.container}>
            <Profil />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        alignItems: "center",
        // justifyContent: "center",
    },
});

export default ProfilScreen;
