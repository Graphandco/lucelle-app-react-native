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
} from "firebase/firestore";

export const CoursesContext = createContext({
    courses: [],
    addCourse: () => {},
    deleteCourse: () => {},
});

function CoursesContextProvider({ children }) {
    const [courses, setCourses] = useState([]);

    //GET COURSES
    useEffect(() => {
        const q = query(
            // orderBy("createdAt", "desc")
            collection(db, "shopping")
            // orderBy("name", "asc")
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let coursesArr = [];
            querySnapshot.forEach((doc) => {
                coursesArr.push({ ...doc.data(), id: doc.id });
            });
            setCourses(coursesArr);
            // console.log(foodsArr);
            /**/
        });
        return () => unsubscribe();
    }, []);

    //ADD COURSE
    const addCourse = async (name, category, imageLink) => {
        await addDoc(collection(db, "shopping"), {
            name,
            category,
            imageLink,
            incartforusers: [],
            tobuyforusers: [],
            createdAt: new Date(),
        });
    };

    // DELETE COURSE
    const deleteCourse = async (shoppingId) => {
        await deleteDoc(doc(db, "shopping", shoppingId));
    };

    const value = {
        courses: courses,
        addCourse: addCourse,
        deleteCourse: deleteCourse,
    };
    // console.log(courses);

    return (
        <CoursesContext.Provider value={value}>
            {children}
        </CoursesContext.Provider>
    );
}

export default CoursesContextProvider;
