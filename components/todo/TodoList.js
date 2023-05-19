import { View, Text, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import { ScrollView } from "react-native-gesture-handler";
import { TitleH1 } from "../ui/Fonts";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { notes } = useContext(NotesContext);
    const [todos, setTodos] = useState(notes);
    // console.log(todos);

    return (
        <>
            <View>
                <TitleH1 center style={styles.title}>
                    ToDo's
                </TitleH1>
            </View>
            <ScrollView style={styles.container}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
    },
    container: {
        flex: 1,
        // backgroundColor: "red",
    },
});
