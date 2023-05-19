import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { TitleH1 } from "../ui/Fonts";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import { COLORS } from "../../constants";

export default function NoteItem({ note }) {
    // console.log(note);
    const { deleteNote } = useContext(NotesContext);
    const { handleChecked } = useContext(NotesContext);

    return (
        <>
            {note && (
                <View style={[styles.card, note.isChecked && { opacity: 0.3 }]}>
                    <Text
                        style={
                            note.isChecked ? styles.textChecked : styles.text
                        }
                    >
                        {note?.content}
                    </Text>
                    <View style={styles.iconWrapper}>
                        <Ionicons
                            name="md-checkmark"
                            size={25}
                            color={"lightgreen"}
                            style={styles.check}
                            onPress={() =>
                                handleChecked(note.id, !note.isChecked)
                            }
                        />
                        {note.isChecked && (
                            <Ionicons
                                name="trash"
                                size={25}
                                color={"red"}
                                style={styles.check}
                                onPress={() => deleteNote(note.id)}
                            />
                        )}
                    </View>
                </View>
            )}
        </>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    text: {
        fontWeight: "600",
        color: "white",
        // fontSize: 14,
    },
    textChecked: {
        fontWeight: "600",
        color: "white",
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
        textDecorationColor: "white",
        // fontSize: 14,
    },
    iconWrapper: {
        flexDirection: "row",
        gap: 15,
    },
    check: {
        // paddingRight: 15,
    },
});
