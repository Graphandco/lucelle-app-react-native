import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Colors from "./components/ui/colors";
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
import LoginScreen from "./screens/LoginScreen";
import NotesScreen from "./screens/NotesScreen";

import NotesContextProvider from "./context/NotesContext";
import CoursesContextProvider from "./context/CoursesContext";
import { AuthContextProvider } from "./context/AuthContext";

const Tab = createBottomTabNavigator();
const Nav = createNativeStackNavigator();

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
            <Header />
            <StatusBar style="dark" />
            <View style={styles.container} onLayout={onLayout}></View>
            <AuthContextProvider>
                <CoursesContextProvider>
                    <NotesContextProvider>
                        <NavigationContainer>
                            <Tab.Navigator
                                screenOptions={{
                                    tabBarInactiveBackgroundColor:
                                        Colors.bgColor,
                                    tabBarActiveBackgroundColor: "#1B2335",
                                    tabBarActiveTintColor: "white",
                                    headerShown: false,
                                }}
                            >
                                <Nav.Screen
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
                                <Nav.Screen
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
                                <Nav.Screen
                                    name="Notes"
                                    component={NotesScreen}
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
                                <Nav.Screen
                                    name="Login"
                                    component={LoginScreen}
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
                                {/* <Stack.Screen name="Depenses" component={DepensesScreen} /> */}
                            </Tab.Navigator>
                        </NavigationContainer>
                    </NotesContextProvider>
                </CoursesContextProvider>
            </AuthContextProvider>
            {/* </View> */}
            {/* <FooterNavigation /> */}
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
