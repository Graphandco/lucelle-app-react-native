import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import AddNoteInput from "./AddNoteInput";
import { PrimaryButton } from "../ui/Buttons";
import { useState } from "react";
import { COLORS } from "../../constants";

export default function AddNote({ isAddOpen, setIsAddOpen, addNote }) {
    const [noteText, setNoteText] = useState("");

    const handleAddNote = (text) => {
        addNote(text);
        handleCancel();
    };
    const handleCancel = () => {
        setNoteText("");
        setIsAddOpen(false);
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isAddOpen}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setIsAddOpen(!isAddOpen);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <AddNoteInput
                            noteText={noteText}
                            setNoteText={setNoteText}
                        />
                        <View style={styles.inputWrapper}>
                            <PrimaryButton
                                outline
                                myColor="white"
                                onPress={handleCancel}
                            >
                                Annuler
                            </PrimaryButton>
                            <PrimaryButton
                                onPress={() => handleAddNote(noteText)}
                            >
                                Ajouter
                            </PrimaryButton>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bg,
    },
    modalView: {
        marginTop: 250,
        width: "90%",
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    inputWrapper: {
        flexDirection: "row",
        gap: 20,
    },
});
