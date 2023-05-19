import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { TitleH2 } from "../ui/Fonts";
import { COLORS } from "../../constants";

const AddNoteInput = ({ noteText, setNoteText }) => {
    return (
        <View>
            <TitleH2 myColor="white">Ajouter une note</TitleH2>
            <SafeAreaView>
                <TextInput
                    autoFocus
                    inputMode="text"
                    style={styles.input}
                    onChangeText={setNoteText}
                    value={noteText}
                    placeholder="Saisir la note"
                    placeholderTextColor="white"
                    keyboardType="numeric"
                />
            </SafeAreaView>
        </View>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        textAlign: "center",
    },
    input: {
        height: 40,
        margin: 12,
        width: 250,
        borderWidth: 1,
        borderColor: COLORS.accent,
        padding: 10,
        color: "white",
        marginVertical: 20,
    },
});

export default AddNoteInput;
