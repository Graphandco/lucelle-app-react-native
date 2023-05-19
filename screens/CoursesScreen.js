import { View, Text, StyleSheet } from "react-native";
import { TextFont, TitleH1, TitleH2 } from "../components/ui/Fonts";
import { PrimaryButton } from "../components/ui/Buttons";
import CoursesList from "../components/courses/CoursesList";
import { COLORS } from "../constants";

const CoursesScreen = () => {
    return (
        <View style={styles.container}>
            <CoursesList />
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

export default CoursesScreen;
