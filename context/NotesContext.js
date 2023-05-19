import { createContext, useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {
    query,
    collection,
    onSnapshot,
    doc,
    addDoc,
    deleteDoc,
    orderBy,
    updateDoc,
    serverTimestamp,
    firebase,
} from "firebase/firestore";

export const NotesContext = createContext({
    notes: [],
    addNote: () => {},
    deleteNote: () => {},
    handleChecked: () => {},
});

function NotesContextProvider({ children }) {
    const [notes, setNotes] = useState([]);

    //GET NOTES
    useEffect(() => {
        const q = query(
            collection(db, "notes")
            // , orderBy("isChecked", "asc")
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let notesArr = [];
            querySnapshot.forEach((doc) => {
                notesArr.push({ ...doc.data(), id: doc.id });
            });
            setNotes(notesArr);
            // console.log(foodsArr);
            /**/
        });
        return () => unsubscribe();
    }, []);

    //ADD NOTE
    const addNote = async (textNote) => {
        await addDoc(collection(db, "notes"), {
            content: textNote,
            isChecked: false,
            createdAt: new Date(),
        });
    };

    // DELETE NOTE
    const deleteNote = async (noteId) => {
        await deleteDoc(doc(db, "notes", noteId));
    };

    // CHECK/UNCHECK
    const handleChecked = async (noteId, isChecked) => {
        await updateDoc(doc(db, "notes", noteId), {
            isChecked: isChecked,
        });
    };

    const value = {
        notes: notes,
        addNote: addNote,
        deleteNote: deleteNote,
        handleChecked: handleChecked,
    };
    // console.log(notes);

    return (
        <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
    );
}

export default NotesContextProvider;
