import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants";
import TodoList from "../components/todo/TodoList";
import { SafeAreaView } from "react-native-safe-area-context";

const TodoScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TodoList />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        // alignItems: "center",
        // justifyContent: "center",
    },
});
export default TodoScreen;
