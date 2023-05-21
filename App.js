import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { Ionicons, Octicons } from "@expo/vector-icons";
import {
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_400Regular_Italic,
} from "@expo-google-fonts/open-sans";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CoursesScreen from "./screens/CoursesScreen";
import DepensesScreen from "./screens/DepensesScreen";
import ProfilScreen from "./screens/ProfilScreen";
import TodoScreen from "./screens/TodoScreen";

import NotesContextProvider from "./context/NotesContext";
import CoursesContextProvider from "./context/CoursesContext";
import { AuthContextProvider } from "./context/AuthContext";
import { COLORS } from "./constants";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                await Font.loadAsync({
                    BebasNeue_400Regular,
                    OpenSans_300Light,
                    OpenSans_400Regular,
                    OpenSans_500Medium,
                    OpenSans_600SemiBold,
                    OpenSans_700Bold,
                    OpenSans_800ExtraBold,
                    OpenSans_400Regular_Italic,
                });
            } catch {
                // handle error
            } finally {
                setAppIsReady(true);
            }
        })();
    }, []);
    const onLayout = useCallback(() => {
        if (appIsReady) {
            SplashScreen.hideAsync();
        }
    }, [appIsReady]);
    if (!appIsReady) {
        return null;
    }

    return (
        <>
            <AuthContextProvider>
                <Header />
                <StatusBar style="dark" />
                <View style={styles.container} onLayout={onLayout}></View>
                <CoursesContextProvider>
                    <NotesContextProvider>
                        <NavigationContainer>
                            <Tab.Navigator
                                screenOptions={{
                                    tabBarInactiveBackgroundColor:
                                        COLORS.bgColor,
                                    tabBarActiveBackgroundColor: COLORS.primary,
                                    tabBarActiveTintColor: COLORS.accent,
                                    headerShown: false,
                                    tabBarStyle: {
                                        height: 60,
                                        borderTopWidth: 1,
                                        borderTopColor: COLORS.primary,
                                    },
                                    tabBarItemStyle: {
                                        paddingVertical: 7,
                                    },
                                }}
                            >
                                <Tab.Screen
                                    name="Courses"
                                    component={CoursesScreen}
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <Ionicons
                                                name="cart-outline"
                                                color={color}
                                                size={size}
                                            />
                                        ),
                                    }}
                                />
                                <Tab.Screen
                                    name="Dépenses"
                                    component={DepensesScreen}
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <Ionicons
                                                name="cash-outline"
                                                color={color}
                                                size={size}
                                            />
                                        ),
                                    }}
                                />
                                <Tab.Screen
                                    name="Notes"
                                    component={TodoScreen}
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <Octicons
                                                name="checklist"
                                                color={color}
                                                size={size}
                                            />
                                        ),
                                    }}
                                />
                                <Tab.Screen
                                    name="Profil"
                                    component={ProfilScreen}
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <Octicons
                                                name="person"
                                                color={color}
                                                size={size}
                                            />
                                        ),
                                    }}
                                />
                            </Tab.Navigator>
                        </NavigationContainer>
                    </NotesContextProvider>
                </CoursesContextProvider>
                {/* </View> */}
                {/* <FooterNavigation /> */}
            </AuthContextProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
