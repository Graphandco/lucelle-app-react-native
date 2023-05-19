import { View, Text, StyleSheet, FlatList } from "react-native";
import { TitleH1 } from "../ui/Fonts";

import { useContext } from "react";
import { CoursesContext } from "../../context/CoursesContext";
import CoursesItem from "./CoursesItem";

export default function CoursesList() {
    const { courses } = useContext(CoursesContext);
    // console.log(courses);

    return (
        <>
            <View style={styles.title}>
                <TitleH1>Courses</TitleH1>
            </View>
            <FlatList
                style={styles.list}
                numColumns={3}
                contentContainerStyle={
                    {
                        // justifyContent: "center",
                        // flexDirection: "row",
                        // flexWrap: "wrap",
                    }
                }
                data={courses}
                renderItem={(itemData) => {
                    return <CoursesItem course={itemData.item} />;
                }}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
                alwaysBounceVertical={false}
            />
        </>
    );
}
const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginBottom: 10,
    },
    add: {
        marginBottom: 10,
    },
    list: {
        flex: 1,
    },
});
