import { View, Text, StyleSheet } from "react-native";
import LoginForm from "../components/login/LoginForm";
import { COLORS } from "../constants";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <LoginForm />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default LoginScreen;
