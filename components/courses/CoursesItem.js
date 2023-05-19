import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
} from "react-native";
import React from "react";
import { TitleFont } from "../ui/Fonts";
import { COLORS } from "../../constants";

const CourseItem = ({ course }) => {
    const screenWidth = Dimensions.get("window").width;
    const numColumns = 3;
    const marginCard = 5;
    const cardSize = screenWidth / numColumns - marginCard * numColumns;

    console.log(course);

    return (
        <View style={[styles.card, { width: cardSize }]}>
            <TitleFont
                style={styles.text}
                size={20}
                center
                // color={COLORS.accent}
            >
                {course?.name}
            </TitleFont>
            {/* <Image
                        style={styles.image}
                        source={{ uri: user.photoURL }}
                    /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.primary,
        alignItems: "center",
        margin: 5,
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius: 10,
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        // fontWeight: "600",
        // fontSize: 14,
    },
    iconWrapper: {
        marginTop: 25,
    },
});

export default CourseItem;
