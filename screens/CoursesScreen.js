import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextFont, TitleH1, TitleH2 } from "../components/ui/Fonts";
import { PrimaryButton } from "../components/ui/Buttons";
import CoursesListPending from "../components/courses/CoursesListPending";
import CoursesListInventaire from "../components/courses/CoursesListInventaire";
import { COLORS } from "../constants";
import EditCourse from "../components/courses/EditCourse";
import { useState } from "react";

const CoursesScreen = () => {
    const [isInventaire, setIsInventaire] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TitleH1 center>Courses</TitleH1>
            </View>
            <View style={styles.switcherWrapper}>
                <Pressable
                    style={[
                        styles.switcherTab,
                        isInventaire && { opacity: 0.5 },
                    ]}
                    onPress={() => setIsInventaire(false)}
                >
                    <Text style={styles.switcherText}>Liste</Text>
                </Pressable>
                <Pressable
                    style={[
                        styles.switcherTab,
                        !isInventaire && { opacity: 0.5 },
                    ]}
                    onPress={() => setIsInventaire(true)}
                >
                    <Text style={styles.switcherText}>Inventaire</Text>
                </Pressable>
            </View>

            {isInventaire ? <CoursesListInventaire /> : <CoursesListPending />}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        // alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginTop: 20,
        marginBottom: 10,
    },
    switcherWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    switcherTab: {
        borderBottomWidth: 2,
        borderBottomColor: COLORS.accent,
        paddingBottom: 7,
        width: 100,
        alignItems: "center",
    },
    switcherText: {
        color: "white",
        paddingHorizontal: 10,
    },
});

export default CoursesScreen;
