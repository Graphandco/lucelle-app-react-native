import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { TitleH1, TitleH2 } from "../ui/Fonts";

import { useContext } from "react";
import { CoursesContext } from "../../context/CoursesContext";
import CoursesItem from "./CoursesItem";
import { UserAuth } from "../../context/AuthContext";
import { ScrollView } from "react-native-gesture-handler";
import { RoudedButton } from "../ui/Buttons";
import { COLORS } from "../../constants";

export default function CoursesListPending() {
    const { courses } = useContext(CoursesContext);
    const { user } = UserAuth();

    let coursesToBuy = courses.filter(function (course) {
        return course.tobuyforusers?.includes(user?.uid) ? course : "";
    });
    coursesToBuy.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    let coursesInCart = coursesToBuy.filter(function (course) {
        return course.incartforusers?.includes(user?.uid) ? "" : course;
    });
    let coursesNotInCart = coursesToBuy.filter(function (course) {
        return course.incartforusers?.includes(user?.uid) ? course : "";
    });

    let allCatList = coursesNotInCart.map((item) => item.category);
    const catList = [...new Set(allCatList)].sort();
    // console.log(courses);

    return (
        <>
            <ScrollView style={styles.scrollView}>
                <>
                    {catList &&
                        catList.map((cat) => (
                            <>
                                <View style={styles.catlist} key={cat}>
                                    <View style={styles.catTitle}>
                                        <TitleH2 color="white">{cat}</TitleH2>
                                    </View>
                                    <View style={styles.list}>
                                        {coursesNotInCart
                                            .filter(function (course) {
                                                return course.category === cat;
                                            })
                                            .map((course) => (
                                                <CoursesItem
                                                    key={course.id}
                                                    course={course}
                                                />
                                            ))}
                                    </View>
                                </View>
                            </>
                        ))}
                </>

                <>
                    {coursesInCart.length > 0 && (
                        <>
                            <TitleH2 size={30}>Déjà dans le panier</TitleH2>
                            <View style={styles.list}>
                                {coursesInCart.map((course) => (
                                    <CoursesItem
                                        key={course.id}
                                        course={course}
                                        inventaire={false}
                                    />
                                ))}
                            </View>
                        </>
                    )}
                </>
            </ScrollView>
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
