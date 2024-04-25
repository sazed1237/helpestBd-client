import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()


    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSingIn = () => {
        setLoading(false)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(false)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }



    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            console.log('current user ', currentUser)
            setUser(currentUser)
        })
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        googleSingIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;