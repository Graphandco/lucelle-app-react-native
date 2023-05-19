import { View, Text, StyleSheet } from "react-native";
import NotesList from "../components/notes/NotesList";
import { COLORS } from "../constants";

const NotesScreen = () => {
    return (
        <View style={styles.container}>
            <NotesList />
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
export default NotesScreen;
