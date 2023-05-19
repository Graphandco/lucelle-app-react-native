import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    Image,
} from "react-native";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";
import { PrimaryButton } from "../ui/Buttons";
import { TitleH1, TitleH2 } from "../ui/Fonts";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";

export default function LoginForm() {
    const { signIn, user, logout } = UserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log(user.photoURL);
    const navigation = useNavigation();
    handleLogin = () => {
        signIn(email, password);
        // navigation.navigate("Courses");
    };

    return (
        <>
            <TitleH1>Login</TitleH1>
            {user && (
                <>
                    <TitleH2>{user.displayName}</TitleH2>
                    <Image
                        style={styles.image}
                        source={{ uri: user.photoURL }}
                    />
                </>
            )}
            <SafeAreaView>
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
                <PrimaryButton onPress={handleLogin}>
                    S'identifier
                </PrimaryButton>
                <PrimaryButton onPress={logout}>Se déconnecter</PrimaryButton>
            </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        textAlign: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 200,
    },
    input: {
        height: 40,
        margin: 12,
        width: 250,
        borderWidth: 1,
        borderColor: COLORS.accent,
        padding: 10,
        color: "white",
    },
});
