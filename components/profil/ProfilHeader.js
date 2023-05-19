import { Image, Text, View, StyleSheet } from "react-native";
import { TitleH1, TitleH2 } from "../ui/Fonts";

export default function ProfilHeader({ user }) {
    return (
        <>
            <View style={styles.title}>
                <TitleH1>{user ? user.displayName : "Se connecter"}</TitleH1>
            </View>
            {user && (
                <>
                    <Image
                        style={styles.image}
                        source={{ uri: user.photoURL }}
                    />
                </>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 200,
    },
});
