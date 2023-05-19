import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import Colors from "../ui/colors";
import { TitleH1, TitleH2 } from "../ui/Fonts";
import { useContext, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { Ionicons } from "@expo/vector-icons";

export default function NotesList() {
    const { notes } = useContext(NotesContext);
    const { addNote } = useContext(NotesContext);
    const [isAddOpen, setIsAddOpen] = useState(false);

    notes.sort((a, b) => (a.createdAt.seconds > b.createdAt.seconds ? -1 : 1));

    // addNote();

    return (
        <>
            <View style={styles.title}>
                <TitleH1>Notes</TitleH1>
            </View>
            <TouchableOpacity
                style={styles.add}
                onPress={() => setIsAddOpen(!isAddOpen)}
            >
                <Ionicons name="add-circle" color={Colors.accent} size={50} />
            </TouchableOpacity>
            <View>
                <AddNote
                    addNote={addNote}
                    isAddOpen={isAddOpen}
                    setIsAddOpen={setIsAddOpen}
                />
            </View>
            <View style={styles.list}>
                <FlatList
                    data={notes}
                    renderItem={(itemData) => {
                        return (
                            <NoteItem
                                style={styles.item}
                                note={itemData.item}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={false}
                />
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: "row",
        flexGrow: 1,
    },
    title: {
        marginTop: 20,
        marginBottom: 10,
    },
    add: {
        marginBottom: 10,
    },
});
