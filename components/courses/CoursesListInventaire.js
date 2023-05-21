import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { TitleH1, TitleH2 } from "../ui/Fonts";

import { useContext, useState } from "react";
import { CoursesContext } from "../../context/CoursesContext";
import CoursesItem from "./CoursesItem";
import { RoudedButton } from "../ui/Buttons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../constants";
import EditCourse from "./EditCourse";
import AddCourse from "./AddCourse";
import { UserAuth } from "../../context/AuthContext";

export default function CoursesListInventaire() {
    const { courses } = useContext(CoursesContext);
    const { user } = UserAuth();
    const [searchText, setSearchText] = useState("");
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editCourse, setEditCourse] = useState(false);
    const [courseID, setCourseID] = useState("");

    let allCatList = courses.map((item) => item.category);
    const catList = [...new Set(allCatList)].sort();

    // console.log(courses);
    handleEditButton = () => {
        setEditMode(!editMode);
        if (editMode || isAddOpen) {
            setEditMode(false);
        }
        setEditCourse(false);
        setIsAddOpen(false);
    };

    const handleEditCourse = (courseID) => {
        setEditCourse(!editCourse);
        setCourseID(courseID);
    };

    return (
        <>
            <View style={styles.header}>
                <SafeAreaView style={styles.search}>
                    <TextInput
                        // autoFocus
                        inputMode="text"
                        style={styles.input}
                        onChangeText={setSearchText}
                        value={searchText}
                        placeholder="Rechercher..."
                        placeholderTextColor="white"
                        // keyboardType="numeric"
                    />
                </SafeAreaView>
                <RoudedButton
                    name="add"
                    onPress={() => setIsAddOpen(!isAddOpen)}
                />
            </View>
            {isAddOpen && <AddCourse setIsAddOpen={setIsAddOpen} />}
            {editCourse && <EditCourse courseID={courseID} />}

            <ScrollView style={styles.scrollView}>
                {catList &&
                    catList.map((cat) => (
                        <View style={styles.catlist} key={cat}>
                            <View style={styles.catTitle}>
                                <TitleH2 color="white">{cat}</TitleH2>
                            </View>
                            <View style={styles.list}>
                                {courses
                                    .filter(function (course) {
                                        return course.category === cat;
                                    })
                                    .map((course) => (
                                        <CoursesItem
                                            key={course.id}
                                            course={course}
                                            inventaire={true}
                                            editMode={editMode}
                                            editCourse={editCourse}
                                            setEditCourse={setEditCourse}
                                            handleEditCourse={handleEditCourse}
                                        />
                                    ))}
                            </View>
                        </View>
                    ))}
            </ScrollView>
            <View style={styles.edit}>
                <RoudedButton
                    name={
                        editCourse || editMode || isAddOpen
                            ? "checkmark"
                            : "build-outline"
                    }
                    onPress={handleEditButton}
                    color={
                        editCourse || editMode || isAddOpen
                            ? "lightgreen"
                            : COLORS.accent
                    }
                />
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginBottom: 20,
    },
    search: {
        paddingHorizontal: 10,
        borderBottomColor: COLORS.accent,
        borderBottomWidth: 1,
    },
    // scrollView: {
    //     flex: 1,
    //     // justifyContent: "center",
    // },
    input: {
        opacity: 0.5,
    },
    catlist: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 35,
    },
    // catTitle: {
    //     alignSelf: "flex-start",
    //     paddingLeft: 20,
    // },
    list: {
        alignSelf: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    edit: {
        position: "absolute",
        bottom: 15,
        right: 15,
    },
});
