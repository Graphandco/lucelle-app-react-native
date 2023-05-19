import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

const TodoItem = ({ todo }) => {
    const translateX = useSharedValue(0);
    // const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);

    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX;
        },
        onEnd: () => {},
    });

    const rStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
        ],
    }));

    return (
        <Animated.View style={styles.container}>
            <PanGestureHandler onGestureEvent={panGesture}>
                <Animated.View style={[styles.todo, rStyle]}>
                    <Text style={styles.todoTitle}>{todo.content}</Text>
                </Animated.View>
            </PanGestureHandler>
        </Animated.View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
    },
    todo: {
        width: "90%",
        height: 60,
        backgroundColor: COLORS.primary,
        marginVertical: 10,
        justifyContent: "center",
        paddingLeft: 20,
        borderRadius: 10,
    },
    todoTitle: {
        fontSize: 16,
        color: "white",
    },
});
export default TodoItem;
