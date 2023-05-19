import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    Image,
} from "react-native";
import { useState } from "react";
import { PrimaryButton } from "../ui/Buttons";
import { TitleH1, TitleH2 } from "../ui/Fonts";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";

export default function ProfilForm({ signIn, user, logout }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log(user.photoURL);
    const navigation = useNavigation();
    handleLogin = async () => {
        await signIn(email, password);
        navigation.navigate("Courses");
    };

    return (
        <>
            {!user && (
                <>
                    <SafeAreaView style={styles.wrapper}>
                        <TextInput
                            autoFocus
                            inputMode="email"
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Email"
                            placeholderTextColor="white"
                            keyboardType="numeric"
                        />
                        <TextInput
                            inputMode="text"
                            style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Mot de passe"
                            placeholderTextColor="white"
                            keyboardType="numeric"
                        />
                    </SafeAreaView>
                    <View style={styles.button}>
                        <PrimaryButton onPress={handleLogin}>
                            S'identifier
                        </PrimaryButton>
                    </View>
                </>
            )}
            {user && (
                <View style={styles.button}>
                    <PrimaryButton onPress={logout}>
                        Se déconnecter
                    </PrimaryButton>
                </View>
            )}
        </>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 15,
    },
    input: {
        height: 40,
        margin: 5,
        width: 250,
        borderWidth: 1,
        borderColor: COLORS.accent,
        padding: 10,
        color: "white",
    },
    button: {
        marginVertical: 20,
    },
});
