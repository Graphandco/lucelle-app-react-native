import { Text, View } from "react-native";
import React, { Component } from "react";
import ProfilForm from "./ProfilForm";
import ProfilHeader from "./ProfilHeader";
import { UserAuth } from "../../context/AuthContext";

export default function Profil() {
    const { signIn, user, logout } = UserAuth();

    return (
        <>
            <ProfilHeader signIn={signIn} user={user} logout={logout} />
            <ProfilForm signIn={signIn} user={user} logout={logout} />
        </>
    );
}
