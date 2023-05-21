import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Pressable,
} from "react-native";
import { TextFont, TitleFont } from "../ui/Fonts";
import { COLORS } from "../../constants";
import { RoudedButton } from "../ui/Buttons";
import { SvgUri } from "react-native-svg";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { UserAuth } from "../../context/AuthContext";

const CourseItem = ({
    course,
    editMode,
    editCourse,
    setEditCourse,
    handleEditCourse,
    inventaire,
}) => {
    const screenWidth = Dimensions.get("window").width;
    const numColumns = 3;
    const marginCard = 5;
    const cardSize = screenWidth / numColumns - marginCard * numColumns;

    const { id, name, image, incart, tobuy, tobuyforusers, incartforusers } =
        course;

    const { user } = UserAuth();

    const handleUserInCart = async () => {
        if (incartforusers?.includes(user?.uid)) {
            await updateDoc(doc(db, "shopping", id), {
                incartforusers: incartforusers.filter(
                    (item) => item !== user.uid
                ),
            });
        } else {
            await updateDoc(doc(db, "shopping", id), {
                incartforusers: [...incartforusers, user?.uid],
            });
        }
    };

    const handleUserToBuy = async () => {
        if (tobuyforusers?.includes(user.uid)) {
            await updateDoc(doc(db, "shopping", id), {
                tobuyforusers: tobuyforusers.filter(
                    (item) => item !== user.uid
                ),
                incartforusers: incartforusers.filter(
                    (item) => item !== user.uid
                ),
            });
        } else {
            await updateDoc(doc(db, "shopping", id), {
                tobuyforusers: [...tobuyforusers, user.uid],
                incartforusers: [...incartforusers, user.uid],
            });
        }
    };

    // console.log(course);
    return (
        <Pressable
            style={[
                styles.card,
                { width: cardSize },
                // editMode && { opacity: 0.3 },
            ]}
            onPress={inventaire ? handleUserToBuy : handleUserInCart}
        >
            <SvgUri width={35} height={35} uri={course.imageLink} />
            <TextFont
                size={11}
                center
                capitalize
                // color={COLORS.accent}
            >
                {course?.name}
            </TextFont>
            {editMode && (
                <View style={styles.edit}>
                    <RoudedButton
                        name="brush-outline"
                        size={15}
                        color={"white"}
                        onPress={() => handleEditCourse(course.id)}
                    />
                </View>
            )}
            {/* <Image
                        style={styles.image}
                        source={{ uri: user.photoURL }}
                    /> */}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.primary,
        alignItems: "center",
        margin: 5,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: "center",
        gap: 5,
    },
    edit: {
        position: "absolute",
        zIndex: 2,
        bottom: -5,
        right: 0,
    },
});

export default CourseItem;
