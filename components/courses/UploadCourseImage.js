import { View, Text, StyleSheet } from "react-native";
import { storage } from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { RoudedButton } from "../ui/Buttons";
import { COLORS } from "../../constants";

export default function UploadCourseImage() {
    const [percent, setPercent] = useState(0); // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    const handleUpload = () => {
        if (!file) {
            alert("Choisissez une image!");
        }
        const storageRef = ref(storage, `/files/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                ); // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setAvatarURL(url);
                    setShowPreview(true);
                });
            }
        );
    };

    return (
        <>
            <View style={styles.uploadWrapper}>
                <RoudedButton
                    name="cloud-upload"
                    color={COLORS.accent}
                    size={30}
                    onPress={handleChange}
                />
                <RoudedButton
                    name="arrow-forward"
                    color="white"
                    size={30}
                    onPress={handleUpload}
                />
            </View>
            <Text style={{ color: "white" }}>{percent}%</Text>
        </>
    );
}
const styles = StyleSheet.create({
    uploadWrapper: {
        flexDirection: "row",
        gap: 30,
    },
});
