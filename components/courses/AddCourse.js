import { View, Modal, StyleSheet, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { TitleH2 } from "../ui/Fonts";
import { COLORS } from "../../constants";
import { PrimaryButton } from "../ui/Buttons";
import { useContext } from "react";
import { CoursesContext } from "../../context/CoursesContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";
import UploadCourseImage from "./UploadCourseImage";

export default function addCourse({ setIsAddOpen }) {
    const { addCourse } = useContext(CoursesContext);

    const [courseName, setCourseName] = useState("");
    const [courseCat, setCourseCat] = useState("");
    const [imageLink, setImageLink] = useState("");

    const handleAddCourse = () => {
        addCourse(courseName, courseCat, imageLink);
        setIsAddOpen(false);
        setCourseName("");
        setCourseCat("");
        setImageLink("");
    };

    // console.log(courseName);

    const allCats = [
        "Fruits et Légumes",
        "Produits Frais",
        "Hygiène & Beauté",
        "Divers",
    ];

    return (
        <View style={styles.centeredView}>
            <TitleH2 size={22}>Ajouter un produit</TitleH2>
            <SafeAreaView style={styles.formEdit}>
                <View style={styles.inputWrapper}>
                    <TitleH2
                        size={20}
                        style={styles.inputLabel}
                        color={"white"}
                    >
                        Nom :
                    </TitleH2>
                    <TextInput
                        autoFocus
                        inputMode="email"
                        style={styles.input}
                        onChangeText={setCourseName}
                        value={courseName}
                        placeholder={courseName}
                        placeholderTextColor="white"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TitleH2
                        size={20}
                        style={styles.inputLabel}
                        color={"white"}
                    >
                        Catégorie :
                    </TitleH2>

                    <SelectDropdown
                        buttonStyle={styles.dropdownButton}
                        buttonTextStyle={{ color: "white" }}
                        dropdownStyle={styles.dropdown}
                        rowTextStyle={{ color: "white" }}
                        defaultButtonText="Choisissez..."
                        defaultValue={courseCat}
                        data={allCats}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                            setCourseCat(selectedItem);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TitleH2
                        size={20}
                        style={styles.inputLabel}
                        color={"white"}
                    >
                        Image :
                    </TitleH2>
                    <TextInput
                        inputMode="text"
                        style={styles.input}
                        onChangeText={setImageLink}
                        value={imageLink}
                        placeholder={imageLink}
                        placeholderTextColor="white"
                        keyboardType="numeric"
                    />

                    {/* <UploadCourseImage /> */}
                </View>
                <PrimaryButton onPress={handleAddCourse}>
                    Ajouter le produit
                </PrimaryButton>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 22,
        paddingBottom: 50,
        backgroundColor: COLORS.primary,
    },
    formEdit: {
        paddingTop: 20,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        gap: 25,
    },
    inputLabel: {
        // width: 200,
    },
    input: {
        flex: 1,
        color: "white",
        fontSize: 19,
        borderColor: COLORS.accent,
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    dropdownButton: {
        borderColor: COLORS.accent,
        borderWidth: 2,
        backgroundColor: "transparent",
        color: "white",
    },
    dropdown: {
        backgroundColor: COLORS.primary,
        color: "white",
    },
});
